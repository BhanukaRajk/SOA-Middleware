const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());

app.post('/pay-bill-deactivate', (req, res) => {
    res.json({ message: 'Bill payment service deactivated successfully' });
});


app.post('/pay-bill', (req, res) => {
    res.json({ message: 'Bill paid successfully' });
});

app.listen(port, () => {
    console.log(`Bill Payment Service is running on port ${port}`);
});
