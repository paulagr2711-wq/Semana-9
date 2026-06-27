const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('El servidor se encuentra activo y respondiendo correctamente.');
});

app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor operativo",
    servicio: "API de la comunidad"
  });
});

app.listen(3000, () => {
  console.log('El servidor ha iniciado de forma exitosa en el puerto 3000');
});
