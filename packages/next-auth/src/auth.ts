
import NextAuth from 'next-auth'

import db from '@repo/prisma-db/client'
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getAccountByUserId, getUserById } from "@repo/prisma-db/repo/user"

 
export const { auth, handlers, signIn, signOut }:any = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt'},
    trustHost: true,
    debug: true,
    secret: 'n0etRnM4Gfe2c7Z7Pdl4CpZxQ4TKkLYzXzAerCFazBf',
    ...authConfig,
    pages:{
        signIn: '/auth/login',
        error: '/auth/error',
    },
    callbacks:{
        async signIn({user,account}){
            //allow loging it it is not credentials provider
            if(account?.provider !=='credentials')return true;
            const existingUser = await getUserById(user?.id!);

            //prevent login if email is not verified
            if (!existingUser?.emailVerified) return false;
            
            return true;
        },
        async session({session,token}){
            if (token.sub) {
                // Fetch the latest user data from the database
                const user = await getUserById(token.sub);
                if (user) {
                    session.user = {
                        ...session.user,
                        id: user.id , // Preserve existing fields
                        name: user.name as string,       // Update with the latest name
                        image: user.image as string,     // Update with the latest avatar
                    };
                }
            }
            return session;
        },
        async jwt({token}){
            if(!token.sub) return token;
            const user = await getUserById(token.sub);
            if (!user) return token;
            const account = await getAccountByUserId(user.id);
            if(account){
                token.provider = account.provider;
            }
            token.role = user.role;
            token.emailVerified = user.emailVerified;
            token.createdAt = user.createdAt;
            token.updatedAt = user.updatedAt;
            token.name = user.name;       // Add name to token
            token.image = user.image;     // Add avatar to token

            return token;
        }
    }
})