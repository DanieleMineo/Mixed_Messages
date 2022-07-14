// Define elements that i need

const button = document.getElementById("button");
const resetButton = document.getElementById("reset-button");
const genie = document.getElementById("genie");
const panel = document.getElementById("panel");
const firstPower = document.getElementById("power1");
const secondPower = document.getElementById("power2");
const thirdPower = document.getElementById("power3");
const recap = document.getElementById("recap");

// Define outputs

const superPowers = {
    power1: ["Super Strength", "Super Speed", "Invisibility", "Pyrokinesis", "Steel Claws", "Teleport", "Hard Skin", "Laser Eyes", "Pausing Time", "Age Manipulation"],
    power2: ["Immortality", "Immediate self-heiling", "Mind Reading", "Gravity Control", "Elasticity", "Talking to Plants", "Talking to Animals", "Hydrokinesis", "Unnatural Good Luck", "Photographic Memory"],
    power3: ["Ant", "Tiger", "Crocodile", "Gorilla", "Rhyno", "Eagle", "Wolf", "Grizzly", "Panther", "Anaconda"]
}

//define random indexes

const randomIndex = Math.floor(Math.random() * 10);

//define random superpowers

const randomPower1 = superPowers["power1"][randomIndex];
const randomPower2 = superPowers["power2"][randomIndex];
const randomPower3 = superPowers["power3"][randomIndex];

//define handler function

const randomOutput = () => {
    genie.classList.add('img-rotate-scale');
    panel.classList.add('panel-scale');
    button.style.visibility = "hidden";
    resetButton.style.visibility = "visible";
    firstPower.innerHTML = randomPower1;
    secondPower.innerHTML = randomPower2;
    thirdPower.innerHTML = randomPower3;
    recap.innerHTML = `Well well well!! You can transform yourself in a ${randomPower3} with the power of ${randomPower1} and ${randomPower2}. That sounds pretty cool! `;
};

button.addEventListener('click', randomOutput);


const reset = () => {
    genie.classList.remove('img-rotate-scale');
    panel.classList.remove('panel-scale');
    button.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
    window.location.reload()
}

resetButton.addEventListener('click', reset)

