const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const schemaData = mongoose.Schema({
    name: String,
    email: String,
    mobile : Number,
},{timestamps: true});


const userModel= mongoose.model('user', schemaData);


// read
app.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({success: true, data:data});
});

// create / save data 
app.post("/create",async (req,res)=>{
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({success: true, message : "Data saved"});

})



// 'mongodb+srv://pkselani00:HO6AnLMPiB7C20dM@crud-table.sys6a7y.mongodb.net/CRUD-table?retryWrites=true&w=majority&appName=crud-table'
mongoose.connect('mongodb+srv://pkselani00:HO6AnLMPiB7C20dM@crud-table.sys6a7y.mongodb.net/CRUD-table?retryWrites=true&w=majority&appName=crud-table')
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log("server is running"));


