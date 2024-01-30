const express = require('express');
const app = express();

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});

app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
