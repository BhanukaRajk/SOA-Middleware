const axios = require('axios');

const orchestratorUrl = 'http://localhost:3000'; // Replace with the actual URL of your orchestrator

// TO TEST ROAMING SERVICE ACTIVATION
const activateRoaming = async () => {
    const requestData = {
        // REQUEST DATA
    };

    try {
        const response = await axios.post(`${orchestratorUrl}/deactivate-roaming`, requestData);
        console.log('Roaming service response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// RUN TO TEST ROAMING SERVICE ACTIVATION
activateRoaming();