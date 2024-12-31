function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    let templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    console.log("sendMail function called");
    console.log(templateParams);


    // Send email via EmailJS
    emailjs.send('service_aoeie78', 'template_cy0sa6q', templateParams).then(
        (response) => {
            alert("Your message has been sent")
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert("An error occurred!")
            console.log('FAILED...', error);
        },
    );
}

function toggleContent() {
    const moreText = document.getElementsByClassName("more-text");
    const moreButton = document.getElementsByClassName("more-button");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        moreButton.innerText = "...Less";
    } else {
        moreText.style.display = "none";
        moreButton.innerText = "...More";
    }
}
