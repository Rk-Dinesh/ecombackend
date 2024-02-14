const taxservice = require("../service/tax_service");

exports.create = async (req, res, next) => {
    try {
        const { cus_id,name,trans,date,status } = req.body;

        const Res = await taxservice.create(cus_id,name,trans,date,status);
        let userData = { cus_id : cus_id,name : name,trans : trans,date : date,status : status};
        res.status(200).json(userData)

    } catch (error) {
        next(error)
    }
}

exports.getall = async(req,res,next) =>{
    try {
        const Admin = await taxservice.get();
        res.status(200).json(Admin)
    } catch (error) {
       next(error) 
    }
}