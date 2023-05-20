import { getProfile } from "../profile/getprofile.mjs";

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