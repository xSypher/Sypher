import { getRandomMotivational } from './motivational.js';
import { getRandomLove } from './love.js';

// Sidebar toggle functionality
document.getElementById('hamburger').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = sidebar.classList.contains('open');
    const targetIsHamburger = event.target === document.getElementById('hamburger');
    const targetIsInsideSidebar = sidebar.contains(event.target);

    if (isSidebarOpen && !targetIsInsideSidebar && !targetIsHamburger) {
        sidebar.classList.remove('open');
    }
});

// Close sidebar when clicking Home button
document.querySelectorAll('.close-menu').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
    });
});

// Quote bubble functionality
document.querySelector('.motivational').addEventListener('click', () => {
    const quoteElement = document.getElementById('motivational-quote');
    const newQuote = getRandomMotivational();
    
    // Fade effect
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = newQuote;
        quoteElement.style.opacity = 1;
    }, 300);
});

document.querySelector('.love').addEventListener('click', () => {
    const quoteElement = document.getElementById('love-quote');
    const newQuote = getRandomLove();
    
    // Fade effect
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = newQuote;
        quoteElement.style.opacity = 1;
    }, 300);
});
