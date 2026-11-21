
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Welcome Message
    console.log("Welcome to our website!");

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Button Click Animation
    document.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "scale(1)";
            }, 150);
        });
    });

    // Scroll Reveal Animation
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card").forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });

});
