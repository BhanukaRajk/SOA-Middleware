const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());

const serviceRegistry = {};

// INITIALIZE WEBSOCKET CONNECTION
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('service-registry', serviceRegistry);
});

// REGISTER A SERVICE
app.post('/register-service', (req, res) => {
    const { serviceName, serviceUrl } = req.body;

    if (!serviceName || !serviceUrl) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    // REGISTER THE SERVICE IN THE REGISTRY
    serviceRegistry[serviceName] = serviceUrl;
    console.log(`Service registered: ${serviceName} at ${serviceUrl}`);
    res.json({ message: 'Service registered successfully' });
});

http.listen(3005, () => {
    console.log('Service Registry is running on port 3005');
});
