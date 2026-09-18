document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const menuItems = document.getElementById("menuItems");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("header, section");

  // ===============================
  // NAVBAR BACKGROUND ON SCROLL
  // ===============================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
    }
    highlightActiveNav();
  });

  // ===============================
  // MOBILE NAV TOGGLE
  // ===============================
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      menuItems.classList.toggle("open");
      const isOpen = menuItems.classList.contains("open");
      navToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuItems.classList.contains("open")) {
        menuItems.classList.remove("open");
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // ===============================
  // SCROLL-SPY / ACTIVE NAV HIGHLIGHT
  // ===============================
  function highlightActiveNav() {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }
});
