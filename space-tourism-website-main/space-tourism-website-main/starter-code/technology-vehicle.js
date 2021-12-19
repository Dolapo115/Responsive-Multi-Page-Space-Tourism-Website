const topBar = document.getElementById('topBar');

const navBar = document.getElementById('navBar');

const hamburger = document.getElementById('hamburger');

const cloze = document.getElementById('close');

const heading = document.getElementById('heading');

const description = document.getElementById('description');

const techImg = document.getElementById('rightImg');

const circle = document.getElementsByClassName('circle');

const circle1 = document.getElementById('circle1');

const circle2 = document.getElementById('circle2');

const circle3 = document.getElementById('circle3');

const mediaQuery = window.matchMedia('(max-width: 800px)');



if (mediaQuery.matches){
    topBar.removeChild(navBar);
    topBar.removeChild(cloze);
    topBar.appendChild(hamburger);
}

else{
    topBar.removeChild(hamburger);
    topBar.removeChild(cloze);
    topBar.appendChild(navBar);
}

hamburger.onclick = ()=>{
    topBar.appendChild(navBar);
    topBar.appendChild(cloze);
    topBar.removeChild(hamburger);
}

cloze.onclick = ()=>{
    topBar.removeChild(navBar);
    topBar.removeChild(cloze);
    topBar.appendChild(hamburger);
}

function switchToVehicle(){
    heading.innerText = 'launch vehicle';
    description.innerText = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-carrier rocket is the most powerful in operation. Standing 150 metres tall, it s quite an awe-inspiring sight on the launch pad!';
    techImg.src = './assets/technology/image-launch-vehicle-portrait.jpg';
    circle1.setAttribute('class', 'effect')
    circle2.setAttribute('class', 'circles')
    circle3.setAttribute('class', 'circles')
}

function switchToSpaceport(){
    heading.innerText = 'spaceport';
    description.innerText = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
    techImg.src = './assets/technology/image-spaceport-portrait.jpg';
    circle1.setAttribute('class', 'circles')
    circle1.style.backgroundColor = 'none';
    circle1.style.color = 'white';
    circle2.setAttribute('class', 'effect')
    circle3.setAttribute('class', 'circles')
}

function switchToCapsule(){
    heading.innerText = 'space capsule';
    description.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    techImg.src = './assets/technology/image-space-capsule-portrait.jpg';
    circle1.setAttribute('class', 'circles');
    circle1.style.backgroundColor = 'none';
    circle1.style.color = 'white';
    circle2.setAttribute('class', 'circles');
    circle3.setAttribute('class', 'effect');
}




//THIS BLOCK IS WHERE I CALL ALL THE FUNCTIONS THAT MAKE THE NECESSARY CHANGES

circle1.onclick = () => {
    switchToVehicle();
}

circle2.onclick = () => {
    switchToSpaceport();
}

circle3.onclick = () => {
    switchToCapsule();
}

window.onload = ()=>{
    switchToVehicle();
}
//