
let info = document.querySelector(".info");
let button = document.querySelector(".profile-pic");
let biousername = document.querySelector("#bio-username")
let bioname = document.querySelector("#bio-name")

if (button && info) {
    button.addEventListener("click", () => {
        info.style.display = "block";
    });

    window.addEventListener("click", (event) => {
        if (event.target !== button && event.target !== info) {
            info.style.display = "none";
        }
    });
}

let nameValue = localStorage.getItem("name");
let usernameValue = localStorage.getItem("username");

if (biousername) {
    biousername.innerHTML = usernameValue;
}
if (bioname) {
    bioname.innerHTML = nameValue;
}
