// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const homeRouter = require('./routes/home'); // 👈 Import new route

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
