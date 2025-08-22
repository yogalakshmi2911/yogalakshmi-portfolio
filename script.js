// Toggle Hamburger menu on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when a nav link is clicked (mobile)
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    setActiveLink(link);
  });
});

// Highlight active nav link on click
function setActiveLink(activeLink) {
  navLinkItems.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Simple contact form submit handling (no backend)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  // Basic email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you for contacting Yogalakshmi.P, ${name}! We'll get back to you soon.`);
  contactForm.reset();
});

// Optional: Update active nav link on scroll
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 60;

  navLinkItems.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      setActiveLink(link);
    }
  });
});
