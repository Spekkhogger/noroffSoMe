
/**
 * Handles the submission of the login form.
 */
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


/**
 * Logs in the user's account by sending a POST request with the provided profile data.
 * @param {Object} profile - The user profile object containing login information.
 * @throws {Error} If an error occurs during the login process.
 */

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
        
    }
}