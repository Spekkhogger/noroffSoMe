// import { baseURL } from "./constants.mjs"; 

import { registrationFormFunc } from "./handlers/registration.mjs";
import { logInFormFunc } from "./handlers/login.mjs"; 
import { create } from "./posts/create.mjs";
import { update } from "./posts/update.mjs";


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


create({
    title: "New post",
    body: "Content in post"
})

update({
    id: 6028,
    title: "New post updated",
    body: "Content in post updated"
})