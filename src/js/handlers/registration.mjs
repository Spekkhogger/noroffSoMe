export function registrationFormFunc(){
    const registrationForm = document.querySelector("#registration-form")

    registrationForm.addEventListener("submit", async(event) =>{
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries());

        console.log(profile);
        await createAccount(profile); 
    })
}

import { baseURL } from "../constants.mjs";

const path = "/auth/register";
const method = "POST"; 

async function createAccount(profile) {
    const registrationURL = baseURL + path;

    const response = await fetch(registrationURL, {
        headers: {
            "Content-type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json()
    console.log(result); 
    return result;
}