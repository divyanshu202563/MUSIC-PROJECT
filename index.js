
let info = document.querySelector(".info");
let button = document.querySelector(".profile-pic");
let biousername = document.querySelector("#bio-username")

button.addEventListener("click", () => {
    info.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target !== button && event.target !== info) {
        info.style.display = "none";
    }

});

 let username = prompt("ENTER YOUR NAME");

function checkusername() {
    

    if (username === null || username === "") {
        // handle empty or cancelled input here
        checkusername()
    }
}


checkusername()

let usernamelower = username.toLowerCase
let length = username.length
let a = biousername.innerHTML =  

