"use server"

import { modifyAvatar, modifyName } from "@repo/prisma-db/repo/user";
import db from "@repo/prisma-db/client"
import bcrypt from "bcryptjs"


export const modifyAvatarAction = async (id:string,url:string) => {
    await modifyAvatar(id,url);
  };

export const modifyNameAction = async (id:string,name:string) => {
    await modifyName(id,name);
}

export const modifyPasswordAction = async (id:string,password:string) =>{
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.update({
        where: {id},
        data: {
            password: hashedPassword
        }
    })
    return {success: "Password modified!"}

}

export const deleteAccountAction = async (id:string) => { 
    await db.user.delete({
        where: {id}
    })
}