
require('dotenv').config({ path: './.env' });
const express = require('express');
const neo4j = require('neo4j-driver');
const app = express();
const PORT = 5001;
const cors = require('cors'); 

  

// Connect to Neo4j database
const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USER;
const password = process.env.NEO4J_PASSWORD;
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

// Ensure to close the Neo4j connection when the Node.js process exits
process.on('exit', () => {
  driver.close();
});

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// API endpoint to fetch transaction data from Neo4j
app.get('/api/transactions', async (req, res) => {
    const session = driver.session();
    const address = req.query.address; // Get address from query parameter
    
    try {
      const query = `
        MATCH (from:Address {from_address: "${address}"})-[r:SENT]->(to:Address)
        RETURN r.hash AS Transaction, from.from_address AS from_address, to.to_address AS to_address, r.value AS Value,r.transaction_fee AS Fee
        UNION
        MATCH (to:Address {to_address: "${address}"})<-[r:SENT]-(from:Address)
        RETURN r.hash AS Transaction, from.from_address AS from_address, to.to_address AS to_address, r.value AS Value,r.transaction_fee AS Fee;
      `;
      const result = await session.run(query);
      const data = result.records.map(record => record.toObject());
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await session.close();
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

