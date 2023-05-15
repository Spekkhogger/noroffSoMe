// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 


const path = location.pathname;


switch (path) {
    case "/":
    case "/profile/login/":
        console.log(path);
        logInFormFunc();
        break;
    case "/profile/register/":
        console.log(path);
        registrationFormFunc();
        break;
}