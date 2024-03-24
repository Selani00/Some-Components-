const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

// 'mongodb+srv://pkselani00:HO6AnLMPiB7C20dM@crud-table.sys6a7y.mongodb.net/CRUD-table?retryWrites=true&w=majority&appName=crud-table'

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.json('Hello World from server');
});

app.listen(PORT, () => console.log("server is running"));
