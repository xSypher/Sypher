document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("sidebar-toggle");

  toggleButton.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");

    // Hide the hamburger icon when sidebar is open
    if (sidebar.classList.contains("active")) {
      toggleButton.style.display = "none";
    } else {
      toggleButton.style.display = "block";
    }
  });

  // Close sidebar when a sidebar link is clicked
  document.addEventListener("click", (event) => {
    const sidebar = document.querySelector(".sidebar");
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isHamburger = event.target.id === "sidebar-toggle";

    if (!isClickInsideSidebar && !isHamburger && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      toggleButton.style.display = "block";
    }

    // If a link inside the sidebar is clicked, close it
    if (event.target.closest(".sidebar a")) {
      sidebar.classList.remove("active");
      toggleButton.style.display = "block";
    }
  });
});
