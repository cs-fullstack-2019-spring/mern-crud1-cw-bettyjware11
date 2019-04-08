var express = require('express');
var router = express.Router();
var ProductCollection = require("../models/ProductSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Product Home Page' });
});


//this route allows user to add products to database
router.get('/addProduct/:productID/:price/:quantity', function(req, res, next) {
    ProductCollection.create({
        productID: req.params.productID,
        price: req.params.price,
        quantity: req.params.quantity

    }, (errors, results) => {
        if (errors) res.send(errors);

        else res.send(results);

     });


//this route displays all products in the database
    router.get('/listAllProducts', (req, res) => {
        //empty curly braces used to grab all info in model
        ProductCollection.find({}, (errors, results) => {
            if (errors) res.send(errors);
            else res.send(results);
        });
    });


//this route allows a product to be deleted by id
    router.delete('/deleteProduct', (req, res) => {
        ProductColletion.deleteOne(
            //using productID to grab the product that you want to delete
            {productID: req.body.productID}, (errors, results) => {
                if (errors) res.send(errors);
                else res.send(results);
            });
    });


});

module.exports = router;
