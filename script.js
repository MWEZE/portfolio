document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 1200 });
    }

    const typingElement = document.getElementById("typing");

    if (typingElement && typeof Typed !== "undefined") {
        new Typed("#typing", {
            strings: [
                "Software Engineer",
                "Web Developer",
                "Mobile App Developer",
                "Graphic Designer",
                "Photographer"
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    } else if (typingElement) {
        typingElement.textContent = "Software Engineer";
    }
});