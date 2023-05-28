/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Build nav 
const navBar = document.getElementById('navbar__list');
const selectionList = document.querySelectorAll('section');

let previous = document.getElementById('section1');

// Build menu
selectionList.forEach(x => {
    navBar.innerHTML += `<li>${x.dataset.nav}</li>`;
});
// Code that still isn't working
const sections = document.getElementsByClassName('menu__link');

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 1 && box.bottom >= 806) {
      section.classList.add("live")
    } else {
      section.classList.remove("live")}
  }
};

document.addEventListener("scroll", function() {makeActive();
});


/* Previous code that is failing project requirements
//listens to scroll action
navBar.querySelectorAll('li').forEach(x => x.addEventListener('click', clicked));

// Scroll to section on link click
function clicked(el) {
// Prevent event from running repeatedly
    el.preventDefault();
    
 // Remove class 'active' to section when near top of viewport  
    previous.classList.toggle("live");

    const targetSection = el.target.innerText;

    let selectedSection = null;

    selectionList.forEach(x => {
        if (x.dataset.nav == targetSection) {
            selectedSection = x;
        }
    });
    console.log(selectedSection);

 // Add class 'active' to section when near top of viewport  
    selectedSection.classList.toggle("live");
    
 // Scroll to anchor ID using scrollTO event   
    selectedSection.scrollIntoView({behavior: "smooth"});
    previous = selectedSection;
}
*/
