// Get the header element
const header = document.querySelector('header');

// Initialize the previous scroll position variable
let prevScrollPos = window.pageYOffset;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Check the scroll direction
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.style.top = '0';
  } else {
    // Scrolling down
    header.style.top = `-${header.offsetHeight}px`;
  }

  // Update the previous scroll position variable
  prevScrollPos = currentScrollPos;
});
