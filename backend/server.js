require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./Routes/User/routes.js');
app.use('/users', userRoutes);

const taskRoutes = require('./Routes/Task/routes.js');
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
