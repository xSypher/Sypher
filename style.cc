/* Base Styles */
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #ffffff;
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    z-index: 1000;
}

.hamburger {
    display: none;
    cursor: pointer;
    color: #2ecc71;
    font-size: 1.5rem;
}

#sidebar {
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100%;
    background-color: #1a1a1a;
    transition: left 0.3s ease;
    z-index: 999;
}

#sidebar.open {
    left: 0;
}

/* Hide hamburger when sidebar is open */
#hamburger {
    display: none;
}

#sidebar.open ~ .hamburger {
    display: none;
}

/* Main Content Styles */
main {
    padding: 6rem 2rem;
    padding-top: 5rem; /* Space for header */
}

.quote-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}

.quote-bubble {
    padding: 1rem;
    border-radius: 15px;
    background-color: #222;
    cursor: pointer;
    transition: transform 0.3s;
}

.quote-bubble.motivational {
    background-color: #2ecc7133;
}

.quote-bubble.love {
    background-color: #3498db33;
}

.quote-bubble:hover {
    transform: scale(1.02);
}

.quote-bubble p {
    transition: opacity 0.3s ease;
}

/* Sidebar Styles */
#sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#sidebar li {
    padding: 1rem;
    border-bottom: 1px solid #333;
}

#sidebar a {
    color: #ffffff;
    text-decoration: none;
}

.sub-menu {
    display: none;
    padding-left: 1rem;
}

/* Sub-menu hover effect */
#sidebar li:hover > .sub-menu {
    display: block;
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
    #sidebar {
        width: 100%;
        left: -100%;
    }

    #sidebar.open {
        left: 0;
    }

    header {
        padding: 1rem 0.5rem;
    }

    .hamburger {
        display: block;
    }

    .quote-section {
        gap: 0.5rem;
    }
  }
