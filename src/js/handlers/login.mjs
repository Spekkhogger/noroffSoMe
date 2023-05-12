import { logInAccount } from "../api/authenticate/login.mjs";

export function logInFormFunc() {
    const logInForm = document.querySelector("#login-form"); 

    logInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const logInForm = event.target;

        const name = logInForm.name.value
        const email = logInForm.email.value
        const password = logInForm.password.value
        const banner = logInForm.banner.value
        const avatar = logInForm.avatar.value
    
        const profile = {
            name,
            email,
            password,
            banner,
            avatar
        }
        console.log(profile);
        logInAccount(profile); 

    })
}