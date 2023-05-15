import { createAccount } from "./../api/authenticate/registration.mjs";

export function registrationFormFunc(){
    const registrationForm = document.querySelector("#registration-form")

    registrationForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        const registrationForm = event.target; 
    
        const name = registrationForm.name.value
        const email = registrationForm.email.value
        const password = registrationForm.password.value
        const banner = registrationForm.banner.value
        const avatar = registrationForm.avatar.value
    
        const profile = {
            name,
            email,
            password,
            banner,
            avatar
        }
        console.log(profile);
        createAccount(profile); 
    })
}