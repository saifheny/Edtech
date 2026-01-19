document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        offset: 100,
        once: true
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        alert("Mobile Menu Clicked!");
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 100);
        });
    });
});
