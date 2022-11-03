let user = new XMLHttpRequest();
user.open('GET','https://jsonplaceholder.typicode.com/users/')
user.responseType = 'json'
user.send()
user.onload = function(){
    let userIds = user.response;
    for( userId of userIds){
    console.log('nuum' + userId.id)
}

    let names = user.response
    for (name1 of names){
        document.getElementById('usersSection').innerHTML += ` <li id="user"> ${name1.username}</li>`
}
    document.getElementById("user").addEventListener("click", postsRequest.bind(this, userId))
    // eventCall()
}


function eventCall() {
    document.getElementById("user").addEventListener("click", postsRequest.bind(this, userId))
}

function postsRequest(){

let Request = new XMLHttpRequest(id);

Request.open('Get','https://jsonplaceholder.typicode.com/users/`${id}`/posts');
Request.responseType = 'json'
Request.send();
Request.onload = function(){
    let posts = Request.response
    for (post of posts){
        document.getElementById('postContent').innerHTML+= `<h3>${post.title}</h3>`
        document.getElementById('postContent').innerHTML += `<p >${post.body}</p>`
    }
}}

// function callRequest() {
// document.getElementById("usersSection").addEventListener("click", postsRequest())}