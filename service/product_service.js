

const ProductModel = require("../model/product_model");
const IdcodeServices = require("./idcode_service");

class ProductServices {

    static async createplan( product_name,filename,productcost,oldprice,description){
       try {
        var product_id = await IdcodeServices.generateCode('ProductId');
        const newImage = new ProductModel({product_id,product_name : product_name ,productimage : filename,productcost : productcost,oldprice : oldprice,description : description});
        return await newImage.save();
       } catch (error) {
         throw error
       }

    }

    static async delete(product_id){
        try {
            var query = { product_id:product_id };
            return await ProductModel.deleteMany(query);
        } catch (error) {
            throw error
        }
    }

    static async getplan(){
        try {
           
            return await ProductModel.find();
        } catch (error) {
            throw error
        }
    }
};

module.exports = ProductServices;