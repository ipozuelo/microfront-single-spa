const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/css', (req, res) => {
  res.send(req);
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});