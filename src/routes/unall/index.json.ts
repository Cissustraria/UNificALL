import type { RequestHandler } from "@sveltejs/kit";

let unalls = [];

export const GET: RequestHandler = async ({ request }) => {
    return {
      status: 200,
      body: unalls
    }
  }


// post
export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  unalls.push(formData.get("text"))
  
  return {      
    status:303,
    headers: {
        location: "/"
    }

}
}