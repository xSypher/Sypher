document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("sidebar-toggle");

  toggleButton.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  });
});
