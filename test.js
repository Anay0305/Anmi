const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://anaysumeet:Anmi2911@cluster0.luc06iq.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB connection URI

// Database Name
const dbName = 'Website'; // Update with your database name

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to MongoDB.');

        return client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

// Function to retrieve memorable moments from MongoDB
async function getMemorableMomentsFromMongoDB(db) {
    try {
        // Access the collection (assuming it's named 'memorableMoments')
        const collection = db.collection('memorableMoments');

        // Retrieve all documents from the collection
        const moments = await collection.find({}).toArray();

        moments.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });

        return moments;
    } catch (err) {
        console.error('Error retrieving memorable moments from MongoDB:', err);
        throw err;
    }
}

// Function to add a moment to MongoDB
async function addMomentToMongoDB(db, date, message) {
    try {
        // Access the collection (assuming it's named 'memorableMoments')
        const collection = db.collection('memorableMoments');

        // Insert the new moment into the collection
        await collection.insertOne({ date, message });

        console.log('New moment added successfully to MongoDB.');
    } catch (err) {
        console.error('Error adding moment to MongoDB:', err);
        throw err;
    }
}

// Connect to MongoDB and execute main logic
connectToMongoDB()
    .then(async (db) => {
        // Display existing memorable moments
        const moments = await getMemorableMomentsFromMongoDB(db);
        console.log('Existing memorable moments:', moments);

        // Close the MongoDB connection
        await db.client.close();
        console.log('Disconnected from MongoDB.');
    })
    .catch(err => {
        console.error('An error occurred:', err);
    });