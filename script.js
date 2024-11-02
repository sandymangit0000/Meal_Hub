

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    
    if (window.scrollY > this.window.innerHeight/3) { // Adjust scroll threshold as needed
        header.classList.add("scrolled");
       
        
    } else {
        header.classList.remove("scrolled");
    }
});

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

const title=document.querySelector('.title')
const tagElement = document.querySelector(".tag");
const nav=document.getElementById("home-nav");
    document.addEventListener('scroll',function()
{
let value = window.scrollY
const slow_up=value*0.2;
    title.style.marginTop = -slow_up + 'px'
    if (window.scrollY > 0) {
        tagElement.style.display = "none"; // Hide the tag on scroll
    } else {
        tagElement.style.display = "block"; // Show the tag when at the top
    }
})
