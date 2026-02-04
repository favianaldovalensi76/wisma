document.addEventListener('DOMContentLoaded', () => {
    // DARK MODE LOGIC
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const modeIcon = themeToggle.querySelector('.mode-icon');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    modeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        modeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section, .member-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});

// Helper reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});