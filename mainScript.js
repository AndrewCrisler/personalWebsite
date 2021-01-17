
//gets the navBarHolder of the html page
var navBarHolder = document.getElementById("navBarHolder");
//get the header of the html page
var header = document.getElementById("header");

//get the about section
var aboutSection = document.getElementById("aboutSection");

//get the root in css
let root = document.documentElement;

//get the tester text
var tester = document.getElementById("tester");
//navbar goes to sticky when it passes the header, could not find a way to get the headers height
var sticky = 75;

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

//initializing code
let screenSize = document.documentElement.clientWidth;
tester.innerHTML = screenSize;

root.style.setProperty('--widthFull', (screenSize) + "px");
//root.style.setProperty('--width10', (screenSize * 0.1) + "px");


//ongoing functions
window.onscroll = function() {stickyHeader()};

window.onresize = function() {
    let screenSize = document.documentElement.clientWidth;
    tester.innerHTML = screenSize;

    root.style.setProperty('--widthFull', (screenSize) + "px");
    //root.style.setProperty('--width10', (screenSize * 0.1) + "px");
}   

