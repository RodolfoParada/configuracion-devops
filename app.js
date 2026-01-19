const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hola! Aplicando DevOps en Chile 🚀' });
});

// Endpoint vital para monitoreo y Docker Healthcheck
app.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app; // Exportamos para las pruebas