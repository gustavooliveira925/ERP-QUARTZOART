const express = require('express');
const cors = require('cors');
const clientesRoutes = require('./routes/clientesRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', clientesRoutes);

app.get('/', (req, res) => {
  res.send('QuartzoArt Backend rodando!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
