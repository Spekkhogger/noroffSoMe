import { baseURL } from "../constants.mjs";
import { authFetch } from "../posts/fetch.mjs";
import { load } from "../storage.mjs";
const postPath = "/profiles";

export async function getProfile(name){
    const getProfileURL = `${baseURL}${postPath}/${name}`; 

    try {
        const response = await authFetch(getProfileURL)   
        return await response.json();
 
    } catch (error){
     console.log(error); 
    }
}


export async function getProfiles(){
    const getProfileURL = `${baseURL}${postPath}`; 

    try {
        const response = await authFetch(getProfileURL)
 
        return await response.json();
 
    } catch (error){
     console.log(error); 
    }
}

// export function getProfilePage(){
//     const profileData = load("profile");
//     console.log(profileData); 
// }