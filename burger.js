
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('button[type="button"]');
        const mobileMenu = document.querySelector('div[role="dialog"]');
        const closeButton = mobileMenu.querySelector('button[type="button"]');

        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        closeButton.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

