const express = require('express')
require('express-router-group');
 
const router = express.Router();
const homeController =  require('../controllers/homeController');
const userController =  require('../controllers/userController');

router.get('/', homeController.homepage);

router.group("/user", (router) => {
    router.get("/list", userController.list);
    router.get("/search", userController.search);
    router.get("/create", userController.insertRecord);
    router.post("/create", userController.post);
    
});


module.exports = router;