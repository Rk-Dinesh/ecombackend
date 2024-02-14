const ProductServices = require("../service/product_service");


exports.plan = async (req, res, next) => {
    try {
      const { product_id,product_name,productcost,oldprice,description} = req.body;
      const { filename } = req.file; 
  
      const plan = await ProductServices.createplan(product_name,filename,productcost,oldprice,description);
      let data = {product_id,product_name : product_name ,productimage : req.file.filename,productcost : productcost,oldprice : oldprice,description : description};
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  exports.delete = async (req,res,next)=>{
    try {
     const { product_id } = req.query;
     const deleteData = await ProductServices.delete(product_id);
     res.status(200).json({message:"Product Deleted",deleteData});   
    } catch (error) {
      next (error )
    }
}

  exports.getplan = async (req,res,next) =>{
    try {
       const getData = await ProductServices.getplan();
       res.status(200).json(getData);
    } catch (error) {
       next (error )
    }
}