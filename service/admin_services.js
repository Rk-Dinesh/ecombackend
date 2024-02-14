const AdminModel =require('../model/admin_model');
const IdcodeServices = require("./idcode_service");

class AdminServices{
    static async registerAdmin(fname,email,phone,password){
        try{
            var userid = await IdcodeServices.generateCode("Admin");
            const createUser = new AdminModel({userid,fname,email,phone,password});
            return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    static async loginAdmin(email){
        try {
            return await AdminModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async updateAdmin(userid,fname,email,phone){
        try {
            var query = {userid : userid};
            var values = {$set : {fname:fname, lname: lname, email: email, phone: phone}};
            
            return await AdminModel.updateOne(query,values)
            
        } catch (error) {
           throw error 
        }
    }

    static async deleteAdmin(userid){
        try{
            var query = {userid : userid};
            return await AdminModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }

    static async getUser(userid){
        try {
            
            return await AdminModel.findOne({userid})
        } catch (error) {
            throw error
        }
    }

    static async getemail(email){
        try {
            
            return await AdminModel.findOne({email})
        } catch (error) {
            throw error
        }
    }

    static async getUseradmin(){
        try {
            return await AdminModel.find();
        } catch (error) {
            throw error
        }
    }

  
}
module.exports = AdminServices;