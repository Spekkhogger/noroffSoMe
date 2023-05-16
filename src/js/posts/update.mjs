import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";

export async function update(newPost) {
    const postURL = `${baseURL}${postPath}/${newPost.id}`; 

   try {
    const response = await authFetch(postURL, {
        method: "put",
        body: JSON.stringify(newPost)
    })

    return await response.json();

   } catch (error){
    console.log(error); 
   }
};