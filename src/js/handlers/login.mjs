
export function logInFormFunc() {
    const logInForm = document.querySelector("#login-form"); 
    logInForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries()); 
    
        await logInAccount(profile); 
        
    })    
} 

import { save } from "../storage.mjs";
import { baseURL } from "../constants.mjs";
const path = "/auth/login";
const method = "POST";

async function logInAccount(profile) {
    const logInURL = baseURL + path; 
    try {
        const response = await fetch(logInURL, {
            headers: {
                "Content-type": "application/json"
            },
            method,
            body: JSON.stringify(profile)
        });
    
        const { accessToken, ...user } = await response.json()
        save("token", accessToken);
        save("profile", user); 

        window.location.replace("../../../profile/feed/");

    } catch (error) {
        console.log(error); 
    }
}