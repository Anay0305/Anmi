const axios = require('axios');

// URL of the API endpoint
const apiUrl = 'http://localhost:3000/api/moments';

// Function to fetch data from the API using Axios
async function fetchDataFromApi() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
        throw error;
    }
}

// Fetch data from the API and print it
fetchDataFromApi()
    .then(data => {
        console.log('Data from API:', data);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
