import type { LoadOutput, RequestHandler } from "@sveltejs/kit";
import type { RequestHandlerOutput } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
    return {
        status: 200,
        body: "hello"
        
    }
}

export const POST: RequestHandlerOutput<RequestHandler<{},FormData>> = (request) => {
    console.log(request.body.get("text"));

    return {
        status: 200,
        body: request.body.get("text")
    }
}