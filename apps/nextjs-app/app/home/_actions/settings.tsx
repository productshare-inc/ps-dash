"use server"

import { modifyAvatar, modifyName } from "@repo/prisma-db/repo/user";

export const modifyAvatarAction = async (id:string,url:string) => {
    await modifyAvatar(id,url);
  };

export const modifyNameAction = async (id:string,name:string) => {
    console.log("modifying name");
    console.log(id);
    console.log(name);
    await modifyName(id,name);
}