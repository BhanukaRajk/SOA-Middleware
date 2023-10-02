// Roaming Service

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// ACTIVATE AND DEACTIVATE ROAMING
app.post('/activate-roaming', (req, res) => {
    res.json({ message: 'Roaming service activated' });
});

app.post('/deactivate-roaming', (req, res) => {
    res.json({ message: 'Roaming service deactivated' });
});

app.listen(port, () => {
    console.log(`Roaming Service is running on port ${port}`);
});
