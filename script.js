const mobileMenu = document.querySelector('#mobile-menu-modal');
const hamburgerButton = document.getElementById('hamburger-button');
const closeModal = document.querySelector('#modal-close-icon img');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('toogleModalDisplay');
}

closeModal.addEventListener('click', toggleMobileMenu);

hamburgerButton.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMobileMenu);
});