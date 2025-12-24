// Home Screen Logic
document.addEventListener('DOMContentLoaded', () => {
    const homeText = document.querySelector('#home-interface h1');
    if(homeText) {
        // Simple fade-in animation for the "Coming Soon" text
        homeText.style.opacity = 0;
        homeText.style.transition = 'opacity 1.5s ease-in';
        setTimeout(() => { homeText.style.opacity = 1; }, 100);
    }
});