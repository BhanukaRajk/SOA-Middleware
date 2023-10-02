// Notifications Service

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;

app.use(bodyParser.json());

// EMAIL, SMS, AND PUSH NOTIFICATIONS
// THIS SERVICE CAN LISTEN TO MESSAGES FROM OTHER SERVICES AND SEND NOTIFICATIONS

app.post('/email-service-activate', (req, res) => {
    res.json({ message: 'Email service activated successfully' });
});

app.listen(port, () => {
    console.log(`Notifications Service is running on port ${port}`);
});
