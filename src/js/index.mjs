// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 
import * as template from "./templates/index.mjs"; 
import * as postMethods from "./posts/read.mjs";


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


async function testPosts(){
    const posts = await postMethods.getPosts();
    const testParent = document.querySelector("#testParent")
    template.renderListOfPostTemplate(posts, testParent); 
}

testPosts();