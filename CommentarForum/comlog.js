"use stricts";


const userId = {
    name: null,
    identity: null,
    image: null, 
    message: null,
    date: null
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", e => {
    if(!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    }
    else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled")
    }
});

publishBtn.addEventListener("click", addPost);

function addPost() {
    if(!userComment.value) return;
    userId.name = userName.value;
    if(userId.name === "Anonymous") {
        userId.identity = false;
        userId.image = "Asset/Anon.png";
    }
    else if (userId.name === "Robin") {
        userId.identity = false;
        userId.image = "Asset/Robin.jpg";
    }
    else {
        userId.identity = true;
        userId.image = "user.png";
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();
    let published = 
    `<div class="parents">
        <img src = "${userId.image}">
        <div>
            <h1>${userId.name}</h1>
            <p>${userId.message}</p>
            <div class="engagements"><img src ="Asset/Like.png"><img src ="Asset/Share.png"></div>
            <span class="date>${userId.date}</span>
        </div>
    </div>`;

    comments.innerHTML += published;
    userComment.value = "";
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
    
    let commentNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentNum;
}