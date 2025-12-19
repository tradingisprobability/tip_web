document.addEventListener("DOMContentLoaded", () => {

  // Fade-in animation
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.2 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fade => {
    appearOnScroll.observe(fade);
  });

  // Mobile menu toggle ✅
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

});
