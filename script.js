
/* =========================================
   TASKFLOW - JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


/* =========================================
   2. CLOSE MENU AFTER CLICKING A LINK
   ========================================= */

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/* =========================================
   3. FOOTER CURRENT YEAR
   ========================================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================================
   4. CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Stop page reload
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value.trim();


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Clear previous message
    formMessage.textContent = "";

    formMessage.className = "form-message";


    // Name validation
    if (name.length < 2) {

        showMessage("Please enter a valid name.", "error");

        return;

    }


    // Email validation
    if (!emailPattern.test(email)) {

        showMessage("Please enter a valid email address.", "error");

        return;

    }


    // Subject validation
    if (subject === "") {

        showMessage("Please select a subject.", "error");

        return;

    }


    // Message validation
    if (message.length < 10) {

        showMessage("Message must contain at least 10 characters.", "error");

        return;

    }


    // Successful front-end validation
    showMessage(
        "Thank you, " + name + "! Your demo request has been validated successfully. (Demo only – no data was sent.)",
        "success"
    );


    // Reset form
    contactForm.reset();

});


/* =========================================
   5. DISPLAY FORM MESSAGES
   ========================================= */

function showMessage(message, type) {

    formMessage.textContent = message;

    formMessage.className = "form-message " + type;

}


/* =========================================
   6. ACTIVE NAVIGATION ON SCROLL
   ========================================= */

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
