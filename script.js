
document.getElementById("year").textContent =
  new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Replace with the institute's real WhatsApp number.
// Use country code + number, without + or spaces.
const instituteNumber = "919616850215";

document.getElementById("enquiryForm").addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const name = document
      .getElementById("studentName")
      .value.trim();

    const course = document
      .getElementById("courseChoice")
      .value;

    if (!name || !course) {
      alert("Please enter your name and select a course.");
      return;
    }

    if (!/^\d{10,15}$/.test(instituteNumber) ||
        instituteNumber.includes("X")) {
      alert(
        "The demo form is ready. Add the institute's real WhatsApp number in script.js to test it."
      );
      return;
    }

    const message =
      `Hello, my name is ${name}. ` +
      `I am interested in ${course}. ` +
      "Please share the course details and admission information.";

    const whatsappURL =
      "https://wa.me/" + instituteNumber +
      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }
);
