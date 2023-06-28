const { Router } = require("express");

const {createUser,handleLogin,users}=require("../controllers/userController")
const product=require("../controllers/prodoct")

const router = new Router();

router.post('/register',createUser);
router.post('/login',handleLogin);
router.get('/usus',users);

//! add product
router.post('/product',product.prodectAdd)
//! get singel product
router.get('/product/:id',product.getsingelProduct);
// !patch edit product
router.patch('/product/:id',product.editProduct);
// ! delet sigel product
router.delete('/product/:id',product.deleteProduct);

//!get Product
router.get('/products',product.getProduct)






module.exports = router;