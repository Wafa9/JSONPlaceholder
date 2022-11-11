function usersRequest(){
    function RandomImg(){
        const imgArray = ['1.png', '2.png', '3.png', '4.png','5.png','6.png','7.png','8.png','9.png'];
        const image = imgArray[Math.floor(Math.random() * 7)]; // 0 -> 2
        var img = document.createElement("img");
        var imgsrc = img.src = './imgFolder/' + image;
        return imgsrc 
         }
    let user = new XMLHttpRequest();
user.open('GET','https://jsonplaceholder.typicode.com/users/')
user.responseType = 'json'
user.send()
user.onload = function(){
document.getElementById('usersSection').innerHTML+= '';
    let users = user.response
    for (user of users){
        let userElement = `
        <div id='user' onclick='userClick(${user.id})' >
       <img src=${RandomImg()} width="30" hight="30"/>
        <li>${user.name}</li>
        </div>
        `
        document.getElementById('usersSection').innerHTML+= userElement;
}
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
    posts.length = 6;
    for(post of posts) {
    
        let postElement = `
        <h4>${post.title}</h4>
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

// function RandomImg(){
//  const imgArray = ['1.png', '2.png', '3.png', '4.png','5.png','6.png','7.png','8.png','9.png'];
//  const randomImage = () => {
// const image = imgArray[Math.floor(Math.random() * 2)]; // 0 -> 2
// var img = document.createElement("img");
// img.src = "./imgFolder/1.png";
// var src = document.getElementById("imgSection");
// src.appendChild(img);

// }}

usersRequest();


