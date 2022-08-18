const mongoose = require("mongoose");
const productsschema = new mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    pname:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('products',productsschema);