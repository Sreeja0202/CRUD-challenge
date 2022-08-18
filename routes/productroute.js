const express = require("express");
const router = express.Router();

router.get("/", (req,res,next)=>
{
    res.send('Getting a list of all products');
});

router.post("/", (req,res,next)=>
{
    res.send('Product created');
})

router.get("/:id", (req,res,next)=>
{
res.send('Getting a single product');
})  

router.patch("/:id", (req,res,next)=>
{
    res.send('Updating a single product')
})

router.delete("/:id", (req,res,next)=>
{
    res.send('Deleting a single product')
})
module.exports = router;