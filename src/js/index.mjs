// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 


const path = location.pathname;

// if (path === "/profile/login/") {
//     console.log("I'm working too!")
//     logInFormFunc();
// } else if (path === "profile/register/"){
//     console.log("Shouln't be here")
//     registrationFormFunc();
// }
switch (path) {
    case "/":
    case "profile/login/":
        logInFormFunc();
        break;
    case "profile/register/":
        registrationFormFunc;
        break;
}