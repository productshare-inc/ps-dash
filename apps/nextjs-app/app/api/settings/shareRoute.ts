import { increaseCredits} from "@repo/prisma-db/repo/user";

export async function shareRoute(request: Request, handler: (request: Request, body?: any,formData?:any) => Promise<Response>) {
    let body: any;

    // Determine the content type
    const contentType = request.headers.get("content-type");

    if (contentType?.includes("application/json")) {
        body = await request.json(); // Parse JSON body
        await increaseCredits(body.id,1);
        return await handler(request,body);
    } else if (contentType?.includes("multipart/form-data")) {
        const formData = await request.formData(); // Parse form-data body
        
        await increaseCredits(formData.get("id") as string,1);
        return await handler(request,formData);
    } else {
        throw new Error("Unsupported Content-Type");
    }
}