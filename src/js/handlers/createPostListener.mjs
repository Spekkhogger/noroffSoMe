import { createNewPostFunc } from "../posts/create.mjs";

export function createNewPostHandler(){
    const newPostForm = document.querySelector("#create-post-form")

    if (newPostForm){
        newPostForm.addEventListener("submit", (event) =>{
            event.preventDefault(); 
            const form = event.target;
            const formData = new FormData(form); 
            const post = Object.fromEntries(formData.entries()); 


            createNewPostFunc(post);
            window.location.replace("../../../profile/feed");
        })
    }
}