// Backend/server.js
const express = require('express');
const connectDB = require('./db');
const routes = require('./route');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI and database name
const uri = "mongodb+srv://anaysumeet:Anmi2911@cluster0.luc06iq.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'Website';

// Connect to MongoDB
connectDB(uri, dbName);

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
