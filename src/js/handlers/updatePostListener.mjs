import { updatePostFunc } from "../posts/update.mjs";
import { getPost } from "../posts/read.mjs";

/**
 * Handles the update post form submission and updates the corresponding post.
 */

export async function updatePostHandler(){
    const updatePostForm = document.querySelector("#edit-post-form")

    const url = new URL(location.href); 
    const id = url.searchParams.get("id");

    if (updatePostForm){
        const oldPost = await getPost(id); 
        console.log(oldPost);

        updatePostForm.title.value = oldPost.title; 
        updatePostForm.body.value = oldPost.body; 


        updatePostForm["tags[]"].value = oldPost.tags; 
        updatePostForm.media.value = oldPost.media; 

        updatePostForm.addEventListener("submit", (event) =>{
            event.preventDefault(); 
            const form = event.target;
            const formData = new FormData(form); 
            const post = Object.fromEntries(formData.entries()); 
            post.id = id;

            updatePostFunc(post);
            window.location.replace("../../../profile/feed");
        })
    }
}