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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables

*/
const ul = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
//createDocumentFragment to content li items
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//looping all sections
for (let section of sections) {
    const newLi = document.createElement("li"); // creat list
    const newLink = document.createElement("a");
    const dataNav = section.getAttribute("data-nav");

    newLink.classList.add("menu__link");
    newLink.innerHTML = `${dataNav}`;
    newLi.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    });
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);

};
ul.appendChild(fragment);




// Add class 'active' to section when near top of viewport
// Scroll to section on link click




function callback(entries) {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            for (let section of sections) {
                const links = document.querySelectorAll("a.menu__link");
                for (newLink of links) {
                   // Set sections as active
                 //remove active class

                    if (section.classList.contains("your-active-class")) {
                        section.classList.remove("your-active-class");
                        newLink.classList.contains("your-active-class");
                        newLink.classList.remove("your-active-class");
                    }

                }
            }
            //end remove
        
            entry.target.classList.add("your-active-class");

        }
    };
}

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.7
}

let observer = new IntersectionObserver(callback, options);
for (let section of sections) {
    observer.observe(section );
}



    
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


