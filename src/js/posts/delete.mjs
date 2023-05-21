import { baseURL } from "../constants.mjs";
const postPath = "/posts";
import { authFetch } from "./fetch.mjs";

/**
 * Deletes a post by sending a DELETE request to the server.
 * @param {string} id - The ID of the post to be deleted.
 * @returns {Promise<Object>} A promise that resolves to the deleted post object.
 * @throws {Error} If an error occurs during the deletion process.
 */
export async function deletePost(id) {
    const postURL = `${baseURL}${postPath}/${id}`; 

   try {
        const response = await authFetch(postURL, {
        method: "delete",
    })

    return await response.json();

   } catch (error){
    
   }
};