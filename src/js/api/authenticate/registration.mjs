import { baseURL } from "./constants.mjs";

const path = "/auth/register";
const method = "post"; 

export async function createAccount(profile) {
    const registrationURL = baseURL + path;


    const response = await fetch(registrationURL, {
        headers: {
            "Content-type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json()
}