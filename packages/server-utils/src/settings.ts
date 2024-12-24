
export const modifyNameAction = async (id:string,name:string) => {
    const response = await fetch("/api/settings/modifyName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name }),
      });
    if(response.status !== 200){
        return {error: "Failed in modifying Name"};
    }
    const {user} = await response.json();
    return {success: "Successfully modified Name", data:user};
}

export const modifyPasswordAction = async (id:string,password:string) => {
    const response = await fetch("/api/settings/modifyPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });
    if(response.status !== 200){
        return {error: "Failed in modifying Password"};
    }
    const {user} = await response.json();
    return {success: "Successfully modified Password", data:user};
    
}

export const modifyAvatarAction = async (id:string,file:any) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("file", file, file.name);

    const userResponse = await fetch("/api/settings/modifyAvatar", {
      method: "POST",
      body: formData,
    });
    if(userResponse.status !== 200){
        return {error: "Failed in modifying Avatar"};
    }
    const {user} = await userResponse.json();
    return {success: "Successfully modified Avatar", data:user};
    

}

export const deleteAccountAction = async (id:string) => {

    const response = await fetch("/api/settings/deleteAccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    if(response.status !== 200){
        return {error: "Failed in deleting Account"};
    }
    return {success: "Successfully deleted Account"};
}

