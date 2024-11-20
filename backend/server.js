require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5001;

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./Routes/User/routes.js');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
