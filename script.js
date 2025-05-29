// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle('open');
});
// Optional: close menu when clicking a link (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
            navLinks.classList.remove('open');
        }
    });
});

// Close menu when clicking outside the navLinks or hamburger
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navLinks.classList.remove('open');
    }
});
