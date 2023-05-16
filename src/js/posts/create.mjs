import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";

export async function create(newPost) {
    const postURL = baseURL + postPath; 

   try {
    const response = await authFetch(postURL, {
        method: "post",
        body: JSON.stringify(newPost)
    })

    return await response.json();

   } catch (error){
    console.log(error); 
   }
};