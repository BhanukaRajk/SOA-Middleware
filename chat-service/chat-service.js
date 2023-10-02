const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// LIST OF CONNECTED CLIENTS
const clients = {};

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // HANDLE INCOMING CHAT MESSAGES
    socket.on('chat-message', (message) => {
        // BROADCAST THE MESSAGE TO ALL CONNECTED CLIENTS
        io.emit('chat-message', { username: clients[socket.id], message });
    });

    // HANDLE USER DISCONNECT
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        // REMOVE THE USER FROM THE LIST OF CONNECTED CLIENTS
        delete clients[socket.id];
    });

    // HANDLE USERNAME ASSIGNMENT
    socket.on('set-username', (username) => {
        // ASSIGN THE USERNAME TO THE USER'S SOCKET
        clients[socket.id] = username;
        // NOTIFY THE CLIENT THAT THE USERNAME HAS BEEN SET
        socket.emit('username-set', username);
    });
});

server.listen(3004, () => {
    console.log('Chat Service is running on port 3004');
});
