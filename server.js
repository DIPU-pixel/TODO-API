// server.js
const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
