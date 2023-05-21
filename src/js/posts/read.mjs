import { baseURL } from "../constants.mjs";
import { authFetch } from "./fetch.mjs";
const postPath = "/posts";

/**
 * Retrieves a single post by its ID.
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the retrieved post object.
 * @throws {Error} If an error occurs during the retrieval process.
 */
export async function getPost(id){
    const readPostURL = `${baseURL}${postPath}/${id}`; 

    try {
        const response = await authFetch(readPostURL)   
        return await response.json();
 
    } catch (error){
        console.log(error); 
    }
}

/**
 * Retrieves all posts.
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 * @throws {Error} If an error occurs during the retrieval process.
 */
export async function getPosts(){
    const readPostsURL = `${baseURL}${postPath}`; 

    try {
        const response = await authFetch(readPostsURL)
        return await response.json();
 
    } catch (error){
        console.log(error); 
    }
}