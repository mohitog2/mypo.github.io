document.addEventListener('DOMContentLoaded', function () {
    const logoItems = document.querySelectorAll('.logo');

    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        logoItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
            }

        });
    };

    window.addEventListener('scroll', fadeInOnScroll);

    fadeInOnScroll();


});

    function scrollToSkills() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
}
    
function whatsapp() {
    window.open("https://wa.me/+918000454743?text=hello");
}

