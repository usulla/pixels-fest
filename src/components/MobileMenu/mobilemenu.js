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
        closeBtn = document.querySelector('.mobile-menu__close');

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }
    function openMobileMenu() {
        document.querySelector('.pages').style.opacity = '0.4';
        if (document.querySelector('.mobile-title-page.show')) {
            document.querySelector('.mobile-title-page.show').style.opacity = '0.4';
        }
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
        liClick();
    }

    function closeMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.remove('mobile-menu--is-active');
        document.querySelector('.pages').style.opacity = '';
        if (document.querySelector('.mobile-title-page.show')) {
            document.querySelector('.mobile-title-page.show').style.opacity = '';
        }
    }
    function liClick() {
        document.querySelector('.mobile-menu-inner').querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                closeMobileMenu();
            })
        })
    }
}
