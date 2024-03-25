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
    res.send({success: true, message : "Data saved", data: data});

})

// update data
/*
// http://localhost:8080/update
{
    "id": "",
    "name": "",
    "email": "",
    "mobile": ""
}


*/

app.put("/update", async (req, res) => {
    console.log(req.body);

    const {id,...rest} = req.body;

    const data = await userModel.updateOne({_id: req.body.id},rest)

    res.send({success: true, message: "Data updated", data: data});

})


// delete data

// http://localhost:8080/delete/id
app.delete("/delete/:id", async (req, res) => {
    const id= req.params.id;
    console.log(id);
    const data= await userModel.deleteOne({_id: id});
    res.send({success: true, message: "Data Deleted", data: data});



}
)


// 'mongodb+srv://pkselani00:HO6AnLMPiB7C20dM@crud-table.sys6a7y.mongodb.net/CRUD-table?retryWrites=true&w=majority&appName=crud-table'
mongoose.connect('mongodb+srv://pkselani00:HO6AnLMPiB7C20dM@crud-table.sys6a7y.mongodb.net/CRUD-table?retryWrites=true&w=majority&appName=crud-table')
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log("server is running"));


