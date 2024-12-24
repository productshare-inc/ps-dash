export const getConnectionsAction = async (userId:string) => {
    const connectionsResponse = await fetch("/api/connections/getConnections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
    const { connections } = await connectionsResponse.json();
    return connections;
}

export const deleteConnectionAction = async (id:string) => {
    await fetch("/api/connections/deleteConnection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
}