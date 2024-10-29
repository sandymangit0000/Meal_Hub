window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > this.window.innerHeight) { // Adjust scroll threshold as needed
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

    document.addEventListener('scroll',function()
{

let value = window.scrollY
     console.log(value)
    title.style.marginTop = value + 'px'

  
    if (window.scrollY > 10) {
        tagElement.style.display = "none"; // Hide the tag on scroll
    } else {
        tagElement.style.display = "block"; // Show the tag when at the top
    }
})
