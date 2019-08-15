document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
});
// const mobileMenuItems = document.querySelectorAll('.mobile-menu-inner li');
// mobileMenuItems.forEach(item => item.addEventListener('click', console.log(99));

// const scrollToPage = () => {
//     console.log(99);
//     toggleMobileMenu();
// };

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.toggle-menu'),
        closeBtn = document.querySelector('.mobile-menu__close'),
        bgGray = document.querySelector('.mobile-menu__bg');

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }

    function openMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
        bgGray.classList.add('show');
    }

    function closeMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.remove('mobile-menu--is-active');
        bgGray.classList.remove('show');
    }
}
