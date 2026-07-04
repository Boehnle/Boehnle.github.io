// Sanfte Scroll-Animationen

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach((element) => {
    observer.observe(element);
});


// Einfaches Kontaktformular: öffnet E-Mail-Programm

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const message = document.getElementById("message")?.value || "";

        const subject = encodeURIComponent("Neue Anfrage über die Website");
        const body = encodeURIComponent(
            `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
        );

        window.location.href = `mailto:info@it-service-boehnke.de?subject=${subject}&body=${body}`;
    });
}