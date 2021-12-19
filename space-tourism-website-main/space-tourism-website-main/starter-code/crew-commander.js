const topBar = document.getElementById('topBar')

const navBar = document.getElementById('navBar')

const hamburger = document.getElementById('hamburger')

const cloze = document.getElementById('close');

const post = document.getElementById('post');

const namee = document.getElementById('name');

const intro = document.getElementById('intro');

const personnelImage = document.getElementById('personnelImg');

const circle = document.getElementsByClassName('circle')

const circle1 = document.getElementById('circle1');

const circle2 = document.getElementById('circle2');

const circle3 = document.getElementById('circle3');

const circle4 = document.getElementById('circle4');

const mediaQuery = window.matchMedia('(max-width: 800px)')



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


const switchToCommander = ()=>{

    post.innerText = 'commander';

    namee.innerText = 'douglas hurley'

    intro.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'

    personnelImage.setAttribute('src', './assets/crew/image-douglas-hurley.png')

    circle1.style.backgroundColor = 'white';

    circle2.style.backgroundColor = 'inherit';

    circle3.style.backgroundColor = 'inherit';

    circle4.style.backgroundColor = 'inherit';

}

const switchToMissionSpecialist= ()=>{

    post.innerText = 'mission specialist';

    namee.innerText = 'mark shuttleworth'

    namee.style.wordSpacing = '1px';

    intro.innerText = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

    personnelImage.setAttribute('src', './assets/crew/image-mark-shuttleworth.png')

    circle1.style.backgroundColor = 'inherit';

    circle2.style.backgroundColor = 'white';

    circle3.style.backgroundColor = 'inherit';

    circle4.style.backgroundColor = 'inherit';

}

const switchToPilot = ()=>{

    post.innerText = 'pilot';

    namee.innerText = 'victor glover'

    intro.innerText = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '

    personnelImage.setAttribute('src', './assets/crew/image-victor-glover.png')

    circle1.style.backgroundColor = 'inherit';

    circle2.style.backgroundColor = 'inherit';

    circle3.style.backgroundColor = 'white';

    circle4.style.backgroundColor = 'inherit';

}

const switchToFlightEngineer = ()=>{

    post.innerText = 'flight engineer';

    namee.innerText = 'anousheh ansari'

    intro.innerText = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '

    personnelImage.setAttribute('src', './assets/crew/image-anousheh-ansari.png')

    circle1.style.backgroundColor = 'inherit';

    circle2.style.backgroundColor = 'inherit';

    circle3.style.backgroundColor = 'inherit';

    circle4.style.backgroundColor = 'white';

}

//THIS BLOCK ATTEMPTS TO CALL ALL THE FUNCTIONS
circle1.onclick = () => {
    switchToCommander();
}

circle2.onclick = () => {
    switchToMissionSpecialist();
}

circle3.onclick = () => {
    switchToPilot();
}

circle4.onclick = () => {
    switchToFlightEngineer();
}
//

//HERE, I ATTEMPT TO MAKE SURE THAT THE EITHER THE HAMBURGER OR THE FULLY REALIZED MENU SHOWS IN RELATION TO THE VIEWPORT WIDTH

// const mediaQuery = window.matchMedia('(max-width: 800px)')

// if (mediaQuery.matches){
//     topBar.removeChild(navBar);
//     topBar.removeChild(cloze);
// }

// else{
//     topBar.removeChild(hamburger);
//     topBar.removeChild(cloze);
//     topBar.appendChild(navBar);
// }

// hamburger.onclick = ()=>{
//     topBar.appendChild(navBar);
//     topBar.appendChild(cloze);
//     topBar.removeChild(hamburger);
// }

// cloze.onclick = ()=>{
//     topBar.removeChild(navBar);
//     topBar.removeChild(cloze);
//     topBar.appendChild(hamburger);
// }



//


