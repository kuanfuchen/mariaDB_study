const express = require('express');
const router = express.Router();
const postsController = require('../controller/postControl');
// const { Posts  } = require('../models/postsModel');

router.get('/', (req, res, next) => postsController.findAllInformation(req, res, next));
router.get('/:id', (req,res, next)=> postsController.findOneInformation(req, res, next));
router.post('/',(req, res, next) => postsController.createInformation(req, res, next));
router.patch('/:id',(req,res, next)=> postsController.updateInformation(req,res,next));
router.delete('/:id', (req,res,next)=> postsController.deleteOneInformation(req, res, next));
// router.delete('/',(req,res,next)=>{
// })
module.exports = router;
