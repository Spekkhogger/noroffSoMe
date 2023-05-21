import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";


/**
 * Updates a post by sending a PUT request to the server with the updated post data.
 * @param {Object} newPost - The updated post data to be sent.
 * @returns {Promise<Object>} A promise that resolves to the updated post object.
 * @throws {Error} If an error occurs during the update process.
 */

export async function updatePostFunc(newPost) {
    const postURL = `${baseURL}${postPath}/${newPost.id}`; 

   try {
    const response = await authFetch(postURL, {
        method: "put",
        body: JSON.stringify(newPost)
    })

    return await response.json();

   } catch (error){
    
   }
};