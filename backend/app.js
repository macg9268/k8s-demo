const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend 🚀' });
});

app.listen(3000, () => {
  console.log('Backend corriendo en puerto 3000');
});
