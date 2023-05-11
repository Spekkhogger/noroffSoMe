import { baseURL } from "./../../constants.mjs"

const path = "/auth/login";
const method = "post";

export async function logInAccount(profile) {
    const logInURL = baseURL + path; 

    const response = await fetch(logInURL, {
        headers: {
            "Content-type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json()

    console.log(result); 

    localStorage.setItem("token", result.accessToken); 
}