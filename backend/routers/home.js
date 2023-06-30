const { Router } = require("express");

const con1=require("../controllers/home")
const con=require("../controllers/admin")

const router = new Router();

router.get('/',con1.home)
router.get('/getblog',con.getBlog);
router.get('/getblog/:id',con.getsingelBlog);
router.get('/getCat',con.getCat);

module.exports = router;