//get the body of the html page
var body = document.getElementById("body");

//gets the navBarHolder of the html page
var navBarHolder = document.getElementById("navBarHolder");

//get the header of the html page
var header = document.getElementById("header");

//get the about section
var aboutSection = document.getElementById("aboutText");

//get the root in css
let root = document.documentElement;

//the number of pixels to change the height of objects to counteract the navbar movement
var sticky = 75;

//current position for the rotate gears
var rotateGearPos = 180;

//the name of rotator event
var rotate

//the name of the gear seperator event
var seperate

//the progress of the second initial animation stage
var animationProgress = 0;

function stickyHeader(){
    if(window.pageYOffset >= sticky){
        navBarHolder.classList.remove("notSticky");
        navBarHolder.classList.add("sticky");

        //shift the other sections
        aboutSection.classList.remove("noShift");
        aboutSection.classList.add("shift");

    } else {
        navBarHolder.classList.remove("sticky");
        navBarHolder.classList.add("notSticky");

        aboutSection.classList.remove("shift");
        aboutSection.classList.add("noShift");
    }
}

//function for rotating the starting gears
function rotateGear(){
    root.style.setProperty('--rotatorPos', rotateGearPos + "deg");
    root.style.setProperty('--rotatorPosOpposite', (360 - rotateGearPos) + "deg");

    if(rotateGearPos != 0){
    rotate = setTimeout(rotateGear, 5);
    } else {
        setTimeout(pullApartGear, 50);
    }

    rotateGearPos--;
}

//function activates after rotateGear and pulls apart the gears
function pullApartGear(){
    root.style.setProperty('--linearAnimationProg', animationProgress + "px");
    root.style.setProperty('--linearAnimationPercent', animationProgress);

    if(animationProgress != 100){
        seperate = setTimeout(pullApartGear, 10);
    } else {
        finishAnimation();
    }

    animationProgress++;
}

function finishAnimation() {
    body.classList.remove("noScroll");
}



//initializing code
let screenSize = document.documentElement.clientWidth;

root.style.setProperty('--widthFull', (screenSize) + "px");
//root.style.setProperty('--width10', (screenSize * 0.1) + "px");


//ongoing functions
window.onscroll = function() {stickyHeader()};

window.onresize = function() {
    let screenSize = document.documentElement.clientWidth;

    root.style.setProperty('--widthFull', (screenSize) + "px");
    //root.style.setProperty('--width10', (screenSize * 0.1) + "px");
}   

var startAnimation = setTimeout(rotateGear, 300);

