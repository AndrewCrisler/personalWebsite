
//gets the navBarHolder of the html page
var navBarHolder = document.getElementById("navBarHolder");
//get the header of the html page
var header = document.getElementById("header");

//get the about section
var aboutSection = document.getElementById("aboutSection");
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

window.onscroll = function() {stickyHeader()};
