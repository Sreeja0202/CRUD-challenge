const express = require("express");
const product = require("../model/products");
const router = express.Router();

// to view all products
router.get("/", async(req,res)=>
{
    try{
const Products = await product.find();
res.json(Products); 
    }catch(err)
    {
        res.send('Error '+ err);
    }
});

// to add products
router.post('/', async (req,res)=>
{
    const Products = new product({
        // id: req.body.id,
        pname: req.body.pname,
        count: req.body.count,
        price: req.body.price
    })
    try
    {
        const adding = await Products.save();
        res.json(adding);
    }catch(err)
    {
        res.send('Error');
    }
})

// to view a single product
router.get("/:id", async(req,res)=>
{
    try{
const Products = await product.findById(req.params.id);
// params = since it is from url
res.json(Products); 
    }catch(err)
    {
        res.send('Error '+ err);
    }
});

// to update
router.patch("/:id", async(req, res)=>
{
    try{
        const Products = await product.findById(req.params.id);
        // params = since it is from url
        // Products.id = req.body.id;
        Products.pname = req.body.pname;
        Products.count = req.body.count;
        Products.price = req.body.price;
        const editing = await Products.save();
        res.json(editing); 
    }catch(err)
    {
        res.send('Error '+ err);
    }
})

// to delete a product
router.delete('/:id', async(req,res)=>
{
    try{
        const Products = await product.findById(req.params.id);
        const deleting = await Products.remove();
        res.json(deleting); 

    }catch(err)
    {
        res.send('Error ' +err);
    }
})
module.exports = router;