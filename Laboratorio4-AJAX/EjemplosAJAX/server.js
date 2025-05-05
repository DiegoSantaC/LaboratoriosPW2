const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('Public'));

app.get('/ajax_info.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'ajax_info.txt'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});