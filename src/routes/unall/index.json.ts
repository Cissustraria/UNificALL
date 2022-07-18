import type { RequestHandler } from "@sveltejs/kit";

let unall = [];

export const GET: RequestHandler = () => {
    return {
        status: 200,
        body: unall
        
    }
}

export const POST: RequestHandler<{}, FormData> = (request) => {
    var text = request.request.body?.getReader().read().finally("text")
    unall.push(text)
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}