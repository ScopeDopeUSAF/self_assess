const { MongoClient } = require('mongodb');
const { MONGODB_URI } = require('./config');
require('./server');

console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI);

(async () => {
  let client;
  try {
    client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();
