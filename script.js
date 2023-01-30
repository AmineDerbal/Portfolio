const mobileMenu = document.querySelector('#mobile-menu-modal');
const hamburgerButton = document.getElementById("hamburger-button");
const closeModal = document.querySelector('#modal-close-icon img');

closeModal.addEventListener("click", toggleMobileMenu)

hamburgerButton.addEventListener("click",toggleMobileMenu)

function toggleMobileMenu() {
    if(mobileMenu.style.display === 'none') {
        mobileMenu.style.display = "block"
    } else{
        mobileMenu.style.display = "none"
    }
}

