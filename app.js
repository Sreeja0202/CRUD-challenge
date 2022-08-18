var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://sreejamohan444:S2YTkp1oTEeOiBqV@cluster0.mwlsecd.mongodb.net/crudchallengedb", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', ()=>
{
    console.log("Error in connecting to the Server");
});
db.once('open',()=>
{
    console.log("Connected to Database");
});

const Productroute = require('./routes/productroute');
app.use('/products', Productroute);

app.listen(5000, ()=>
{
    console.log("Listening on Port 5000");
});
// app.post("/addproducts", (req,res)=>
// {
//     var id = req.body.id;
//     var pname = req.body.name;
//     var count = req.body.count;
//     var price = req.body.price; 

// var data = {
//     "id": id,
//     "name": pname,
//     "count": count,
//     "price": price
// }

// db.collection('products').insertOne(data, (err, products)=>
// {
//     if(err)
//     {
//         throw err;
//     }
//    console.log("Product Successfully added to the Database");
// });
// return res.redirect('index.html');
// })


// app.get("/", (req,res)=>
// {
//     // res.send("Hello from Server");
//     res.set({"Allow-access-Allow-Origin":'*'});
//     return res.redirect('index.html');
// }).listen(3000); from 1st youtube video

