function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_4oyap97", "template_cy0sa6q", parms)
        .then(function(response) {
            console.log("passed")
            alert("Your message has been sent!");
        })
        .catch(function(error) {
            console.log("failed")
            alert("Failed to send the message: " + JSON.stringify(error));
        });
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
