require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./Routes/routes');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});