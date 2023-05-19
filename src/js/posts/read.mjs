import { baseURL } from "../constants.mjs";
import { authFetch } from "./fetch.mjs";
const postPath = "/posts";

export async function getPost(id){
    const readPostURL = `${baseURL}${postPath}/${id}`; 

    try {
        const response = await authFetch(readPostURL)
 
        return await response.json();
 
    } catch (error){
     console.log(error); 
    }
}


export async function getPosts(){
    const readPostsURL = `${baseURL}${postPath}`; 

    try {
        const response = await authFetch(readPostsURL)
 
        return await response.json();
 
    } catch (error){
     console.log(error); 
    }
}