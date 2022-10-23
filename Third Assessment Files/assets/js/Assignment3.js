
// ---> Main Page
//Adding a greeting button for the main page
let mainButton = document.querySelector("#Button");
let welcome = document.querySelector(".WelcomeImg");
let greetingButton = mainButton;

//Adding an exit for the pop-up
window.addEventListener('keypress', welcomeOff);

//Exiting code
function welcomeOff() {
    welcome.style.visibility = "hidden";
    welcome.style.zIndex = "-5";
}

//Button1: Opening code
greetingButton.addEventListener('click', welcomeButton);

function welcomeButton() {
    welcome.style.visibility = "visible";
    welcome.style.zIndex = "15";
}

// ---> Section 1: Skywhales
//Skywhale Alert for Images

let swImage1 = document.querySelector(".SkywhaleImage2");

swImage1.addEventListener('click', function(){
    alert("Skywhale!");
})

// ---> Section 2: Telstra Tower 
//Telstra Tower random facts alert

let telstraImage = document.querySelector(".TTImage"); 

telstraImage.addEventListener('click', function(){
    alert("The Telstra Tower was initially opposed of due to the wish to conserve Black Mountain.");
})

// ---> Form submission javascript
function enterForm() {

    let usersName = document.getElementById("userName");
    let formBox = document.getElementById("endForm");

    if (usersName.textContent=true) {
        formBox.innerHTML = "Hope to see you soon!"
    } 
}

//Here are some abandoned or unfit Javascript projects initially to be added into the site.

/*
let cloudimg = document.querySelector(".cloud");
let skywhaleimg = document.querySelector(".skywhaleimg:hover");

function cloudhover (mouseEvent){
if (skywhaleimg = true) {
    cloudimg.style.opacity = "1.0";
} else {
    cloudimg.style.opacity = "0.0";
}
}

const cloud = document.getElementsByClassName("cloud")

$(cloud).onmouseover = function () {hoverOn()};
$(cloud).onmouseout = function () {hoverOff()}; 

function hoverOn(mouseEvent) {
    $(cloud).style.opacity = "1.0"; 
}

function hoverOff(mouseEvent) {
    $(cloud).style.opacity = "0.0";
}

document.getElementsByClassName("cloud").addEventListener("mouseover", hoverOn);
document.getElementsByClassName("cloud").addEventListener("mouseout", hoverOff); 

function hoverOn(){
    document.getElementsByClassName("cloud").style.opacity = "1.0";
}

function hoverOff(){
    document.getElementsByClassName("cloud").style.opacity = "0.0";
}

let swButton = document.createElement("button");
let facts = ["The Skywhale cost $300000 worth of public funds to create", "The spouse, Skywhalepapa, was introduced in 2021", "It took 40 minutes to inflate both balloons in the event of their unveilling", "It took 3.6 kilometers of fabric to construct the Skywhalepapa", "The Skywhalepapa is more than 30 metres high"]
let factsRandom = random(facts);

swButton.innerText="Random Skywhale Fact";

document.body.appendChild(swButton);

swButton.addEventListener("click", buttonClicked);

function buttonClicked() {
    alert(factsRandom);
}
*/