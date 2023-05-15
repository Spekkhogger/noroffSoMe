
export function logInFormFunc() {
    const logInForm = document.querySelector("#login-form"); 
    logInForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries()); 
    
        console.log(profile);
        await logInAccount(profile); 
        
    })    
} 

import { baseURL } from "../constants.mjs"
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
    
        const result = await response.json()
        localStorage.setItem("token", result.accessToken); 
    
        console.log(result); 
    } catch (error) {
        console.log(error); 
    }
}