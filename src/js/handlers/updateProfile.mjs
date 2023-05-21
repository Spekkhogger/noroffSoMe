import { getProfile } from "../profile/getprofile.mjs";

/**
 * Handles the update profile form submission.
 */
export async function updateProfileHandler(){
    const updateProfileForm = document.querySelector("#update-profile-form")

    const { name, email } = load(profile); 

    if (updateProfileForm){
        const profile = await getProfile(name); 
        console.log(name);

        updateProfileForm.name.value = name;
        updateProfileForm.email.value = email;
        updateProfileForm.avatar.value = profile.avatar;
        updateProfileForm.banner.value = profile.banner;

        

        updateProfileForm.addEventListener("submit", (event) =>{
            event.preventDefault(); 
            const form = event.target;
            const formData = new FormData(form); 
            const profile = Object.fromEntries(formData.entries()); 

            updateProfileFunc();
            window.location.replace("../../../profile/");
        })
    }
}

import { baseURL } from "../constants.mjs";
const profilePath = "/profiles";
import { authFetch } from "./fetch.mjs";


/**
 * Updates the user's profile data by sending a PUT request to the server.
 * @param {Object} profileData - The updated profile data to be sent.
 * @returns {Promise<Object>} A promise that resolves to the updated profile data.
 * @throws {Error} If an error occurs during the update process.
 */
async function updateProfileFunc(profileData) {
    const profileURL = `${baseURL}${profilePath}/${profileData.name}`; 

   try {
    const response = await authFetch(profileURL, {
        method: "put",
        body: JSON.stringify(newPost)
    })

    return await response.json();

   } catch (error){
    console.log(error); 
   }
};