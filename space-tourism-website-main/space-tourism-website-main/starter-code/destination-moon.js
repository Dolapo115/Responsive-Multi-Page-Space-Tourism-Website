const topBar = document.getElementById('topBar');

const navBar = document.getElementById('navBar');

const hamburger = document.getElementById('hamburger');

const cloze = document.getElementById('close');

let animate = false;

const destAnimation = {
    image: document.getElementById('planets'),
    navs:{
        moon: document.getElementById('moon'),
        mars: document.getElementById('mars'),
        europa: document.getElementById('europa'),
        titan: document.getElementById('titan')
    },

    destHeader: document.getElementById('destHeader'),

    destDescription: document.getElementById('destDescription'),

    averageDist: document.getElementById('averageDist'),

    estTravelTime: document.getElementById('estTravelTime'),


    switchToMoon: ()=>{

        destAnimation.image.setAttribute('src', './assets/destination/image-moon.png');

        destAnimation.destHeader.innerText = 'moon';

        destAnimation.destDescription.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';

        destAnimation.averageDist.innerText = '384,400km';

        destAnimation.estTravelTime.innerText = '3 days'

        destAnimation.navs.moon.setAttribute('class', 'effect');

        destAnimation.navs.mars.setAttribute('class', '');

        destAnimation.navs.europa.setAttribute('class', '');

        destAnimation.navs.titan.setAttribute('class', '');

        // animate = true;

        // if (animate == true){

        // destAnimation.destHeader.style.animation = 'animate 1s ease-out'

        // destAnimation.destHeader.style.animationDelay = '0.1s'

        // destAnimation.image.style.animation = 'animate 0.5s ease-out'

        // }

        // animate = false

        // destAnimation.destHeader.style.animation = ''


    

        //destAnimation.destHeader.style.animation = undefined


    },

    switchToMars: ()=>{

        destAnimation.destHeader.style.animation = ''

        destAnimation.image.setAttribute('src', './assets/destination/image-mars.png');

        destAnimation.destHeader.innerText = 'mars';

        destAnimation.destDescription.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';

        destAnimation.averageDist.innerText = '225 mil. km';

        destAnimation.estTravelTime.innerText = '9 months'

        destAnimation.navs.moon.setAttribute('id', '');

        destAnimation.navs.moon.setAttribute('class', '');

        destAnimation.navs.mars.setAttribute('class', 'effect');

        destAnimation.navs.europa.setAttribute('class', '');

        destAnimation.navs.titan.setAttribute('class', '');

        // animate = true

        // if (animate = true){

        // destAnimation.destHeader.style.animation = 'animate 1s ease-out'

        // destAnimation.destHeader.style.animationDelay = '0.1s'

        // destAnimation.image.style.animation = 'animate 0.5s ease-out'

        // }

        // animate = false;

        // destAnimation.destHeader.style.animation = ''


        
    },

    switchToEuropa: ()=>{

        destAnimation.image.setAttribute('src', './assets/destination/image-europa.png');

        destAnimation.destHeader.innerText = 'europa';

        destAnimation.destDescription.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';

        destAnimation.averageDist.innerText = '628 mil. km';

        destAnimation.estTravelTime.innerText = '3 years'

        destAnimation.navs.moon.setAttribute('id', '');

        destAnimation.navs.moon.setAttribute('class', '');

        destAnimation.navs.mars.setAttribute('class', '');

        destAnimation.navs.europa.setAttribute('class', 'effect');

        destAnimation.navs.titan.setAttribute('class', '');

        // destAnimation.destHeader.style.animation = 'animate 1s ease-out'

        // destAnimation.destHeader.style.animationDelay = '0.1s'

        // destAnimation.image.style.animation = 'animate 0.5s ease-out'


    },

    switchToTitan: ()=>{

        destAnimation.image.setAttribute('src', './assets/destination/image-titan.png');

        destAnimation.destHeader.innerText = 'titan';

        destAnimation.destDescription.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';

        destAnimation.averageDist.innerText = '1.6 bil. km';

        destAnimation.estTravelTime.innerText = '7 years'

        destAnimation.navs.moon.setAttribute('id', '');

        destAnimation.navs.moon.setAttribute('class', '');

        destAnimation.navs.mars.setAttribute('class', '');

        destAnimation.navs.europa.setAttribute('class', '');

        destAnimation.navs.titan.setAttribute('class', 'effect');

        // destAnimation.destHeader.style.animation = 'animate 1s ease-out'

        // destAnimation.destHeader.style.animationDelay = '0.1s'

        // destAnimation.image.style.animation = 'animate 0.5s ease-out'


    }

}

//THIC BLOCK CONTAINS THE CALLING OF ALL THE DESTINATION ANIMATION FUNCTIONS
destAnimation.navs.mars.onclick = ()=>{
   destAnimation.switchToMars()
}

destAnimation.navs.moon.onclick = ()=>{
   destAnimation.switchToMoon()   
}

destAnimation.navs.europa.onclick = ()=>{
   destAnimation.switchToEuropa()
}

destAnimation.navs.titan.onclick = ()=>{
   destAnimation.switchToTitan()
}

//



//HERE, I ATTEMPT TO MAKE SURE THAT THE EITHER THE HAMBURGER OR THE FULLY REALIZED MENU SHOWS IN RELATION TO THE VIEWPORT WIDTH

const mediaQuery = window.matchMedia('(max-width: 800px)')

if (mediaQuery.matches){
    topBar.removeChild(navBar);
    topBar.removeChild(cloze);
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



//


