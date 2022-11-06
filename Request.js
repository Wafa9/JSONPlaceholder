function usersRequest(){let user = new XMLHttpRequest();
user.open('GET','https://jsonplaceholder.typicode.com/users/')
user.responseType = 'json'
user.send()
user.onload = function(){
    
//     let userIds = user.response;
//     for( userId of userIds){
//     console.log('nuum' + userId.id)
// }
document.getElementById('usersSection').innerHTML+= '';
    let users = user.response
    for (user of users){
        let userElement = `
        <div id='user' onclick='userClick(${user.id})' >
        <li>${user.name}</li>
        </div>
        `
        document.getElementById('usersSection').innerHTML+= userElement;
}
    // document.getElementById("user").addEventListener("click",function() {postsRequest(userId)})
}}




function postsRequest(userId){

let Request = new XMLHttpRequest();

    Request.open('Get','https://jsonplaceholder.typicode.com/posts?userId='+userId);
Request.responseType = 'json'
Request.send();
Request.onload = function(){
    if(Request.status >= 200 && Request.status < 300){
    document.getElementById('postContent').innerHTML = '';
    let posts = Request.response
    for (post of posts){
        let postElement = `
        <h3>${post.title}</h3>
        <p >${post.body}</p>`
        document.getElementById('postContent').innerHTML+= postElement;
    }}else{
        console.log('wafa');
    }
}
}
function userClick(id){
    let userId = id;
    postsRequest(userId)
}

usersRequest();
