import db from './index';
import {v4 as uuidv4} from 'uuid';

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findFirst({ where: {email}});
        return user;
    }
    catch (error) {
        return null;
    }
}

export const getAccountByUserId = async (userId: string) => {
    try {
        const account = await db.account.findFirst({ where: {userId}});
        return account;
    }
    catch (error) {
        return null;
    }
}

export const getUserById= async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: {id}});
        return user;
    }
    catch (error) {
        return null;
    }
}


export const getResetTokenByEmail = async (email: string) => {
    try{
        const token = await db.resetPasswordToken.findFirst({
            where:{email}
        });
        return token;
    }
    catch (error){
        return null;
    }
}

export const getResetTokenByToken = async (token: string) => {
    try{
        const resetToken = await db.resetPasswordToken.findUnique({
            where:{ token }
        });
        return resetToken;
    }
    catch (error){
        return null;
    }
}

export const createResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 60*60*1000)
    const existingToken = await getResetTokenByEmail(email);
    if (existingToken){
        await db.resetPasswordToken.delete({
            where:{id: existingToken.id},
        })
    }
    const resetToken = await db.resetPasswordToken.create({
        data:{
            email,
            token,
            expires
        }
    })
    return resetToken;
}

