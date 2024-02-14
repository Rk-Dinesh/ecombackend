const mongoose = require('mongoose');
const db = require('../config/db');

const {Schema} = mongoose;

const ProductSchema = new Schema({
    product_id : {
        type : String,
        required : true
    },
    product_name : {
        type : String,
        required : true,
    },
    productimage : {
        type : String,
        default : " ",
    },
    productcost : {
        type :String,
        required : true,
    },
    oldprice : {
        type : String,
        required : true,
    },
    description: {
        type : String,
        required : true,
    },
    
});

const ProductModel = db.model('product',ProductSchema);

module.exports = ProductModel;