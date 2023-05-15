import { logInAccount } from "../api/authenticate/login.mjs";

console.log("Hello")
// const logInForm = document.querySelector("#login-form"); 
// console.log(logInForm);



export function logInFormFunc() {
    const logInForm = document.querySelector("#login-form"); 
    logInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries); 
    
        console.log(profile);
        logInAccount(profile); 
        
    })    

} 


        // const email = logInForm.email.value
        // const password = logInForm.password.value
    
        // const profile = {
        //     email,
        //     password,
        // }