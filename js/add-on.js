document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("yWZJLoIUu98bXnUwK"); // Initialize EmailJS with your public key
});

function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Send email via EmailJS
    emailjs
        .send("service_4oyap97", "template_cy0sa6q", params)
        .then(
            function (response) {
                alert("Email sent successfully!");
                console.log("SUCCESS!", response);
            },
            function (error) {
                alert("Failed to send email. Please try again.");
                console.error("ERROR:", error);
            }
        );
}

function toggleContent() {
    const moreText = document.getElementById("more-text");
    const moreButton = document.getElementById("more-button");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        moreButton.innerText = "...Less";
    } else {
        moreText.style.display = "none";
        moreButton.innerText = "...More";
    }
}
