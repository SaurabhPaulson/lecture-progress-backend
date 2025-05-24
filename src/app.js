require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <-- Add this line
const progressRoutes = require('./routes/progressRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <-- Add this line
app.use(express.json());
app.use('/api/progress', progressRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});