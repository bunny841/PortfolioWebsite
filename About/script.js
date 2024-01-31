document.addEventListener('DOMContentLoaded', function () {
    const aboutContainer = document.querySelector('.about-container');
  
    aboutContainer.addEventListener('scroll', function () {
      // Check if user has scrolled to the bottom
      if (aboutContainer.scrollTop + aboutContainer.clientHeight === aboutContainer.scrollHeight) {
        // Load more content or perform any action when scrolled to the bottom
        console.log('Scrolled to the bottom!');
      }
    });
  });
  