document.getElementById('aboutbtn').addEventListener('click', function () {
        document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' });
    });

document.addEventListener("DOMContentLoaded", function () {
    var collapsible = document.querySelector(".content");
    
    collapsible.addEventListener("click", function () {
        collapsible.classList.toggle("active");
    });
});

document.getElementById("email-link").addEventListener("click", function (event) {
    event.preventDefault();
    var receiverEmail = "recipient@example.com";
    var subject = "Regarding the course";

    var mailtoUrl = "mailto:" + receiverEmail + "?subject" + encodeURIComponent(subject);

    window.location.href = mailtoUrl;
});

