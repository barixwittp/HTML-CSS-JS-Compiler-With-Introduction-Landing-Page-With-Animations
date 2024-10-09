function loading(){
    var tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        delay: 1,
        ease: "expo.out"
    }, "anim");

    tl.to(".loader h1", {
        color: "black",
        delay: 1,
        duration: 0.7
    }, "anim");

    tl.to(".loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".navbar").style.display = "flex";
        }
    });
}

loading();

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

// Handle navbar background change on scroll
const navBar = document.querySelector(".navbar");

scroll.on('scroll', (obj) => {
    const scrollY = obj.scroll.y; // Get the current scroll position

    if (scrollY > 50) {
        navBar.style.backgroundColor = "rgba(252, 215, 2, 0.34)"; // More opaque semi-transparent yellow
        navBar.classList.add("aa")
    } else {
        navBar.style.backgroundColor = ""; // Reset to transparent
        navBar.classList.remove("aa")

    }
});

// Anchor link smooth scrolling using Locomotive Scroll
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            scroll.scrollTo(targetSection);
        }
    });
});
