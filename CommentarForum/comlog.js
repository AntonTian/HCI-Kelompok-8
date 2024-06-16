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
const allStar = document.querySelectorAll('.rating .star')
const rateVal = document.querySelector('.rating input')

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
    if(userId.name === "Type your name here...") {
        userId.name = "Anonymous";
        userId.identity = false;
        userId.image = "Asset/Anon.png";
    }
    if(userId.name === "") {
        userId.name = "Anonymous";
        userId.identity = false;
        userId.image = "Asset/Anon.png";
    }
    else if (userId.name === "Robin") {
        userId.identity = false;
        userId.image = "Asset/Robin.jpg";
    }
    else if (userId.name === "Sebas") {
        userId.identity = false;
        userId.image = "Asset/Sebas.jpg";
    }
    else {
        userId.identity = true;
        userId.image = "Asset/Anon.png";
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

let popup = document.getElementById("popup");
let popup1 = document.getElementById("popup1");

function openPopup(){
    popup.classList.add("open-popup")
    allStar.forEach((item, idx)=> {
        item.addEventListener('click', function() {
            let click = 0
            rateVal.value = idx + 1
            console.log(rateVal.value)
    
            allStar.forEach (i=> {
                i.classList.replace('bxs-star', 'bx-star')
                i.classList.remove('active')
            })
            for(let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star')
                    allStar[i].classList.add('active')
                }
                else {
                    allStar[i].style.setProperty('--i', click)
                    click++
                }
            }
        })
    })
}

function openPopup1(){
    popup.classList.add("open-popup1")
}
function closePopup(){
    popup.classList.remove("open-popup")
}

function closePopup1(){
    popup.classList.remove("open-popup1")
}


function valid() {
    const ifeed = document.textbox.IFeed;
    const result = document.getElementById("result");

    if (ifeed.value.trim() == "") {
        result.innerHTML = "Enter your message";
        return false;
    }
    else if ((ifeed.value.trim() != "")){
        popup.classList.add("open-slide")
        return false;
    }
    result.innerHTML = ""; // Clear any previous error message
    return true; // Allow the form to be submitted
}

function closeSlide() {
    popup.classList.remove('open-slide');
}