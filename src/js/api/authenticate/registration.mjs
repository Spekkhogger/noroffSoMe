

const path = "/auth/register";
const method = "post"; 

export async function createAccount(profile) {
    const registrationURL = ""


    const response = await fetch(registrationURL, {
        headers: {
            "Content-type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json()
}