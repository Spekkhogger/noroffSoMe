// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 
import * as template from "./templates/index.mjs"; 
import * as postMethods from "./posts/read.mjs";

import { createNewPostHandler } from "./handlers/createPostListener.mjs";
import { updatePostHandler } from "./handlers/updatePostListener.mjs";
import { getProfilePage } from "./profile/getprofile.mjs";

const path = location.pathname;
console.log("Hello");

switch (path) {
    case "/":
    case "/profile/login/":
        logInFormFunc();
        break;
    case "/profile/register/":
        registrationFormFunc();
        break;
    case "/profile/post/create/":
        createNewPostHandler();
        break;
    case "/profile/post/edit/":
        updatePostHandler();
        break;
    case "/profile/feed/":
        console.log(path);
        postMethods.getPosts();
        break;
    case "/profile/":
        console.log(path); 
        getProfilePage();
        break;
}


// template.renderListOfPostTemplate(postMethods.getPosts(), ("#testParent")); 