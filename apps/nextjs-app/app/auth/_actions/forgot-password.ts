"use server"

import { createResetToken } from '@repo/prisma-db/repo/user';
import { sendResetEmail } from '@repo/email/resend/index';
import { getUserByEmail } from '@repo/prisma-db/repo/user';

export const ForgotPassword = async (email: string) => {
    const existingEmail = await getUserByEmail(email);
    if (!existingEmail){
        return {error: "Email doesn't exist!"}
    }
    const newToken = await createResetToken(email);
    await sendResetEmail(email, newToken.token);
    return {success: "Email with Reset Token sent!"}

}