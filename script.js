function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    if (menu.className === "nav-menu") {
        menu.className += " responsive";
    } else {
        menu.className = "nav-menu";
    }
}

// Scroll active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-menu a");

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active-link");
                document.querySelector(".nav-menu a[href*=" + id + "]").classList.add("active-link");
            });
        }
    });
};

// Set awal tampilan icon
window.onload = () => {
    sunIcon.style.display = "none"; // Awalnya sun disembunyiin
};

// ScrollReveal Animations
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.featured-text, .top-header', { origin: 'top' });
ScrollReveal().reveal('.featured-image, .about-info, .contact-info', { origin: 'left' });
ScrollReveal().reveal('.skill, .form-control, .project-box', { origin: 'bottom' });