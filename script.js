document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to handle the click event on navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Get target section element

            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section

            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Function to add 'active' class to the current section link
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
document.getElementById("read-more-btn").addEventListener("click", function() {
    var moreBio = document.getElementById("more-bio");
    if (moreBio.style.display === "none") {
        moreBio.style.display = "block";
        this.textContent = "Read less";
    } else {
        moreBio.style.display = "none";
        this.textContent = "Read bio";
    }
});
function sendMail(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form data
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Check if EmailJS is initialized correctly
    if (emailjs) {
        emailjs.send("service_dvxs0i8", "template_xytrhan", parms)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email Sent Successfully!");
        }, function(error) {
            console.error("FAILED...", error);
            alert("Failed to send email. Please check your setup.");
        });
    } else {
        console.error("EmailJS is not initialized.");
        alert("EmailJS is not initialized properly.");
    }
}
