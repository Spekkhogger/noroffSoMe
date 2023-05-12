// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 

const path = location.pathname;

if (path === "/profile/login/") {
    logInFormFunc();
} else if (path === "profile/register/"){
    registrationFormFunc();
}