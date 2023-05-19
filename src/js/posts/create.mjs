import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";

/**
 * Creates a new post by sending a POST request to the server.
 * @param {Object} newPost - The new post object to be created.
 * @returns {Promise<Object>} A promise that resolves to the created post object.
 * @throws {Error} If an error occurs during the creation process.
 */

export async function createNewPostFunc(newPost) {
    const postURL = baseURL + postPath; 
    console.log(postURL); 

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