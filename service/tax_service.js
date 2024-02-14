const TaxModel = require("../model/transaction_model");

class taxservice {
    static async create(cus_id,name,trans,date,status){
        try{
            const createUser = new TaxModel({cus_id,name,trans,date,status});
            return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    static async get(){
        try {
            return await TaxModel.find();
        } catch (error) {
            throw error
        }
    }
}

module.exports = taxservice;