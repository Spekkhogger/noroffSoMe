
export async function updateProfileHandler(){
    const updatePostForm = document.querySelector("#update-profile-form")

    const url = new URL(location.href); 
    const { name, email } = load(profile); 
    console.log(name); 

    // if (updatePostForm){
    //     const oldPost = await getPost(id); 
    //     console.log(oldPost);

    //     updatePostForm.title.value = oldPost.title; 
    //     updatePostForm.body.value = oldPost.body; 


    //     updatePostForm["tags[]"].value = oldPost.tags; 
    //     updatePostForm.media.value = oldPost.media; 

    //     updatePostForm.addEventListener("submit", (event) =>{
    //         event.preventDefault(); 
    //         const form = event.target;
    //         const formData = new FormData(form); 
    //         const post = Object.fromEntries(formData.entries()); 
    //         post.id = id;

    //         updatePostFunc(post);
    //     })
    // }
}