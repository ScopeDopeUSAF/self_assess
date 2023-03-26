const { MongoClient } = require('mongodb');
const { MONGODB_URI } = require('./config');

let client;

async function connectToDatabase() {
  try {
    client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    console.log('Connection to MongoDB closed.');
  }
}

module.exports = { connectToDatabase, closeDatabaseConnection };
