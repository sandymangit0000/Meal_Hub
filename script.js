window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > this.window.innerHeight) { // Adjust scroll threshold as needed
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});