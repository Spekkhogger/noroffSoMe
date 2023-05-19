// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 
import * as template from "./templates/index.mjs"; 
import * as postMethods from "./posts/read.mjs";

import { createNewPostHandler } from "./handlers/createPostListener.mjs";
import { updatePostHandler } from "./handlers/updatePostListener.mjs";

const path = location.pathname;

switch (path) {
    case "/":
    case "/profile/login/":
        logInFormFunc();
        break;
    case "/profile/register/":
        registrationFormFunc();
        break;
    case "/profile/post/create/":
        console.log(path); 
        createNewPostHandler();
        break;
    case "/profile/post/edit/":
        console.log(path);
        updatePostHandler();
        break;
}