// Home page button
const helloBtn = document.getElementById("hello-btn");
if (helloBtn) {
  helloBtn.addEventListener("click", () => {
    document.getElementById("hello-msg").textContent =
      "Hello! This message was added by JavaScript.";
  });
}

// Contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").textContent =
      "Thanks! Your message has been received (demo only, not actually sent).";
    contactForm.reset();
  });
}
