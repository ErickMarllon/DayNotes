const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());
require('./src/config/dbConfig');

app.use(routes);
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
