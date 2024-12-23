
export const modifyNameAction = async (id:string,name:string) => {
    await fetch("/api/settings/modifyName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name }),
      });
}

export const modifyPasswordAction = async (id:string,password:string) => {
    await fetch("/api/settings/modifyPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });
}

export const modifyAvatarAction = async (id:string,file:any) => {
const formData = new FormData();
  formData.append("id", id);
  formData.append("file", file, file.name);

  const userResponse = await fetch("/api/settings/modifyAvatar", {
    method: "POST",
    body: formData,
    // Note: No need for "Content-Type": "application/json" if sending FormData
  });
  const { user } = await userResponse.json();
    return user;
}

export const deleteAccountAction = async (id:string) => {
    await fetch("/api/settings/deleteAccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
}

