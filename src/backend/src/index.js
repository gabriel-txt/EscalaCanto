import app from './app.js';

require('dotenv').config();
const express = require('express');
const cors = require('cors');


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em  http://localhost:${PORT}`);
});
