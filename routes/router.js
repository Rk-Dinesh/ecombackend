const router = require('express').Router();
const { route } = require('../app');
const multer = require('multer');
const path = require('path');

const idcodeController = require('../controller/idcode_controller');
const categoriesController = require('../controller/categories_controller');
const AdminController = require('../controller/admin_controller');
const ProductController = require('../controller/product_controller');
const taxController = require('../controller/tax_controller')



const storage = multer.diskStorage({
    destination: './image',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});


const upload1 = multer({storage: storage}).single('categoryimage');
const product = multer({storage: storage}).single('productimage');


router.post('/tax', taxController.create);
router.get('/taxall',taxController.getall)

router.post('/idcode',idcodeController.idcode);

router.post('/admin', AdminController.register);
router.post('/adminlogin', AdminController.login);
router.get('/getadmin',AdminController.get)
router.get('/getadmin1',AdminController.getAdmin);
router.get('/getemail',AdminController.getEmail);
router.put('/updateadmin', AdminController.Update);
router.delete('/deleteadmin',AdminController.delete);



router.post('/categories',upload1,categoriesController.categories);
router.post('/updatecategories',upload1,categoriesController.update);
router.get('/categoriesGet',categoriesController.get);
router.get('/getcategories',categoriesController.getCategory);
router.delete('/categoriesDelete',categoriesController.delete);


router.post('/product',product,ProductController.plan);
router.get('/getproducts',ProductController.getplan);
router.delete('/deleteproducts',ProductController.delete);




module.exports = router;