const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML files
app.use(express.static(path.join(__dirname, '../')));

// Serve index.html when the root route is visited
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route to handle sending email
app.post('/send-mail', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or any other email service you prefer
        auth: {
            user: 'rdikamona9@gmail.com',  // Replace with your email
            pass: 'vjlr pfid wvtj bnem'    // Replace with your email password (or use app-specific password)
        }
    });

    // Email options
    let mailOptions = {
        from: email,        // Sender's email
        to: 'rdikamona9@gmail.com',  // Replace with your email address
        subject: subject,   // Subject from the form
        text: `You have received a new message from ${name} (${email}):\n\n${message}`  // Message body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
