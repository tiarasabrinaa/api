const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Import fetch untuk Node.js
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint utama
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon API!');
});

// Endpoint GET untuk mengambil data dari PokeAPI
app.get('/pokemon', async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from PokeAPI:', error);
    res.status(500).send('Error fetching data from PokeAPI');
  }
});

// Endpoint POST untuk menambahkan data (simulasi)
app.post('/pokemon', (req, res) => {
  res.json({ message: 'Simulated POST request. No real data added.' });
});

// Endpoint PUT untuk memperbarui data (simulasi)
app.put('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body; // Mengambil data dari request body

  console.log('PUT request received for Pokémon ID: ${id}');
  console.log('Data to update:', updateData);

  res.json({ 
    message: 'Simulated PUT request for Pokémon ID: ${id}', 
    data: updateData
  });
});

// Endpoint PATCH untuk memperbarui sebagian data (simulasi)
app.patch('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  const partialUpdateData = req.body; // Mengambil data dari request body

  console.log('PATCH request received for Pokémon ID: ${id}');
  console.log('Data to partially update:', partialUpdateData);

  res.json({ 
    message: 'Simulated PATCH request for Pokémon ID: ${id}', 
    data: partialUpdateData 
  });
});

// Endpoint DELETE untuk menghapus data (simulasi)
app.delete('/pokemon/:id', (req, res) => {
  const { id } = req.params;

  console.log('DELETE request received for Pokémon ID: ${id}');

  res.json({ message: 'Simulated DELETE request for Pokémon ID: ${id}. No real data deleted. '});
});

// Endpoint HEAD untuk memeriksa keberadaan resource
app.head('/pokemon', (req, res) => {
  res.status(200).end();
});

// Endpoint OPTIONS untuk memeriksa metode HTTP yang didukung
app.options('/pokemon', (req, res) => {
  res.setHeader('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  res.status(200).end();
});

app.listen(port, () => {
  console.log('Server running at http://localhost:${port}');
});