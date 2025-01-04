
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  // Add this to your script.js file

function validateForm(event) {
  event.preventDefault();
  
  // Reset error messages
  clearErrors();
  
  // Get form elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  let isValid = true;
  
  // Validate name (minimum 2 characters)
  if (name.value.trim().length < 2) {
    showError('name-error', 'Name must be at least 2 characters long');
    isValid = false;
  }
  
  // Validate email format
  if (!isValidEmail(email.value)) {
    showError('email-error', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Validate subject (minimum 3 characters)
  if (subject.value.trim().length < 3) {
    showError('subject-error', 'Subject must be at least 3 characters long');
    isValid = false;
  }
  
  // Validate message (minimum 10 characters)
  if (message.value.trim().length < 10) {
    showError('message-error', 'Message must be at least 10 characters long');
    isValid = false;
  }
  
  if (isValid) {
    // Here you would typically send the form data to your server
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  }
  
  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error-message');
  Array.from(errorElements).forEach(element => {
    element.textContent = '';
  });
}