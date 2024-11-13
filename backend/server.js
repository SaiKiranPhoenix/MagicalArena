// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');
const matchRoutes = require('./routes/matchRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
