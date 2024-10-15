
      // Get all the anchor tags in the navigation
const navLinks = document.querySelectorAll('nav ul li a');

      // Get the current URL path
const currentPage = window.location.pathname;

// Loop through the anchor tags
navLinks.forEach(link => {
  // Check if the href of the anchor matches the current page URL
  if (link.getAttribute('href') === currentPage) {
    // Add an 'active' class to the matching anchor
    link.classList.add('active');
  }
});
