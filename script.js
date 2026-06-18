document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.section-title, .about-text, .about-card, .bento-card, .project-card, .contact-wrapper, .timeline-item');

    hiddenElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when links are clicked
    const actionLinks = document.querySelectorAll('.nav-links a');
    actionLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('toggle');
            links.forEach(l => {
                l.style.animation = '';
            });
        });
    });
});

// Preloader Fade Out
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }
});
