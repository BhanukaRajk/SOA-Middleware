const axios = require('axios');

const serviceRegistryUrl = 'http://localhost:3005'; // Replace with the actual URL of your service registry

const serviceName = 'roaming-service';
const serviceUrl = 'http://localhost:3001'; // Replace with the actual URL of the Roaming Service

axios.post(`${serviceRegistryUrl}/register-service`, {
    serviceName,
    serviceUrl,
})
    .then((response) => {
        console.log('Service registration response:', response.data);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
