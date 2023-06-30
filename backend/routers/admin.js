const { Router } = require("express");

const con=require("../controllers/admin")
const { authenticated } = require("../middlewares/auth");

const router = new Router();

router.post('/setCat',authenticated,con.setCat);
router.delete('/deletecat/:id',authenticated,con.deleteCat);

router.post('/sendblog',authenticated,con.setblog);
router.patch('/editblog/:id',authenticated,con.editBlog);

router.delete('/deleteblog/:id',authenticated,con.deleteBlog);

// router.get('/getblog',con.getBlog);
// router.get('/getblog/:id',con.getsingelBlog);


router.get('/getcallus',authenticated,con.getcallus);
router.get('/getcallus/:id',authenticated,con.getsingelCall);



router.post('/addadmin',authenticated,con.createAdmin);
router.post('/loginadmin',con.handleLoginadmin);





module.exports = router;