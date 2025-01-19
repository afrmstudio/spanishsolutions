document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Functionality
    const languageSwitcher = document.getElementById('language-switcher');

    languageSwitcher.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const sections = document.querySelectorAll('[data-lang]');

        sections.forEach(section => {
            section.style.display = section.dataset.lang === selectedLanguage ? 'block' : 'none';
        });
    });

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple Animation on Scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => observer.observe(element));
});
