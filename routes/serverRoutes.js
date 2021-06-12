const express=require('express');
const router=express.Router();
const serverController=require('../controller/serverController');


router.get('/',serverController.getIndex);
router.post('/',serverController.postIndex);

module.exports=router;