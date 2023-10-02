const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request-promise-native');

app.use(bodyParser.json());

// INITIALIZE WEBSOCKET CONNECTION
io.on('connection', (socket) => {
    console.log('A user connected');
    // HANDLE CHAT INTERACTIONS HERE
});

const serviceUrls = {
    roaming: 'http://localhost:3001',
    billPayment: 'http://localhost:3002',
    notifications: 'http://localhost:3003',
};

app.post('/activate-roaming', async (req, res) => {
    try {
        const response = await request.post(`${serviceUrls.roaming}/activate-roaming`, { json: true });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to activate roaming' });
    }
});

app.post('/pay-bill', async (req, res) => {
    try {
        const response = await request.post(`${serviceUrls.billPayment}/pay-bill`, { json: true });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to pay bill' });
    }
});

app.post('/pay-bill-deactivate', async (req, res) => {
    try {
        const response = await request.post(`${serviceUrls.billPayment}/pay-bill-deactivate`, { json: true });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to deactivate' });
    }
});

http.listen(3000, () => {
    console.log('Middleware Orchestrator is running on port 3000');
});