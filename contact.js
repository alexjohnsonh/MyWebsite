document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Your validation code here
    if (!isValid) {
      event.preventDefault();
    }
  });