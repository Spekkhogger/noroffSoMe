import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";

export async function deletePost(id) {
    const postURL = `${baseURL}${postPath}/${id}`; 

   try {
        const response = await authFetch(postURL, {
        method: "delete",
    })

    return await response.json();

   } catch (error){
    console.log(error); 
   }
};