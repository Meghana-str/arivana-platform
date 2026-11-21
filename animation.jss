
document.addEventListener("DOMContentLoaded", function () {

    // Reveal elements when scrolling
    const elements = document.querySelectorAll(
        ".card, section h2, .hero"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });

    // Button hover animation
    document.querySelectorAll("button").forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "translateY(0)";
        });

    });

});

