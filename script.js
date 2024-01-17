// Here is the JS developed by Pushkar for the landing pages

const currentPage = window.location.href;

// Check if the current page is the login page
if (currentPage.includes('login.html')) {
// Get the necessary elements
const forgotPasswordLink = document.getElementById('forgot-password');
const popupOverlay = document.getElementById('popup-overlay');
const closeBtn = document.getElementById('close-btn');

// Function to open the popup
function openPopup() {
  popupOverlay.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  popupOverlay.style.display = 'none';
}

const resetEmailInput = document.getElementById('reset-email');

// Function to check the email format and apply the appropriate class
function checkEmailFormat() {
  if (resetEmailInput.value === '') {
    resetEmailInput.classList.remove('valid-email');
    resetEmailInput.classList.remove('invalid-email');
  } else if (resetEmailInput.validity.valid) {
    resetEmailInput.classList.remove('invalid-email');
    resetEmailInput.classList.add('valid-email');
  } else {
    resetEmailInput.classList.remove('valid-email');
    resetEmailInput.classList.add('invalid-email');
  }
}

// Event listener for the email input
resetEmailInput.addEventListener('input', checkEmailFormat);
$(document).ready(function () {
  $('.dropdown').hover(
    function () {
      $(this).find('.dropdown-menu').fadeIn(300);
    },
    function () {
      $(this).find('.dropdown-menu').fadeOut(300);
    }
  );
});
} else {
  // Default script if the current page doesn't match any conditions
  // Add your default script here
}
$(document).ready(function () {
  $('.dropdown').hover(
    function () {
      $(this).find('.dropdown-menu').fadeIn(300);
    },
    function () {
      $(this).find('.dropdown-menu').fadeOut(300);
    }
  );
});
