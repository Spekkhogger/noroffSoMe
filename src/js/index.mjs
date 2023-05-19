// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 


const path = location.pathname;


switch (path) {
    case "/":
    case "/profile/login/":
        logInFormFunc();
        break;
    case "/profile/register/":
        registrationFormFunc();
        break;
}
