/**
 * Generates a post template element based on the provided post data.
 * @param {Object} postData - The data object representing a post.
 * @returns {HTMLElement} The generated post template element.
 */

export function postTemplate(postData){
    const post = document.createElement("div"); 
    post.classList.add("post"); 
    post.innerText = postData.title; 

    if (postData.media){
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from/of ${postData.title}`;
        post.append(img); 
    }

    const button = document.createElement("button"); 
    post.append(button); 

    button.addEventListener("click", ()=> console.log(postData)); 

    return post; 
}

export function renderPostTemplate(postData, parent){
    parent.append(postTemplate(postData)); 
}

export function renderListOfPostTemplate(listOfPosts, parent){
    parent.append(...listOfPosts.map(postTemplate)); 
}