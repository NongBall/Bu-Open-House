let toggle = false

document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector(".main-container");
    const navbarToggle = document.querySelector(".navbar-toggler");
    navbarToggle.addEventListener('click', function () {
        toggle = !toggle

        if (!toggle) {
            mainContainer.style.height = "calc(100dvh - 162px)";
        } else {
            mainContainer.style.height = "calc(100dvh - 380px)";
        }
    });
});