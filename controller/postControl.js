const handleError = require('../utils/handleError');
const handleSucess = require('../utils/heandleSucess');
const { Posts  } = require('../models/postsModel');
const sequelize = require('../connection/index');
const postsController = {
  findAllInformation: async(req, res, next) => {
    console.log('-------')
    const allInformation = await Posts.findAll();
    console.log(allInformation, 'allInformation')
    handleSucess(res, allInformation)
    // res.status(200).send({
    //   success:'success',
    //   infomation:allInformation
    // })
  },
  findOneInformation: async(req, res, next)=>{
    try{
      const id = req.params.id;
      const findOneData = await Posts.findByPk(id);

      if(findOneData !== null){
        handleSucess(res, findOneData)
      }else{
        res.status(200).json({
          status:'success',
          data:'查無此資料'
        })
        res.end();
      }
    }catch(err){
      handleError(400, res,next,err);
    }
    
  },
  createInformation:(req, res, next)=>{
    try{
      const title = req.body.title.trim();
      const id = Date.now();
      // console.log(id, 'id')
      const data = { title, id };
      sequelize.sync().then(()=>{
        Posts.create(data).then(()=>{
        
          handleSucess(res, data);
        }).catch((err)=>{
          handleError(400, res,next,err);
        });
      })
      
    }catch(err){
      handleError(400, res,next,err);
    }
    
  },
  updateInformation: async(req, res, next)=>{
    try{
      const id = req.params.id;
      const title = req.body.title;
      
      const findOneData = await Posts.findByPk(id);
      if(findOneData !== null){
        await Posts.update( {title}, {
          where:{id}
        }).then(()=>{
          handleSucess(res, 'update success');
        });
      }else{
        handleError(400,res, next, "data don't exist");
      }
    }catch(err){
      handleError(400,res, next, err)
    }
  },
  deleteOneInformation: async(req, res, next)=>{
    try{
      const id = req.params.id;
      const findId = await Posts.findByPk(id);
      if(findId === null) return handleError(401, res, next, "don't data");
      await Posts.destroy({where:{id}}).then(()=>handleSucess(res, {data:'delete success'}));
    }catch(err){
      handleError(401, res, next, err)
    }
    
  },
  deleteAllInformation:async(req, res, next)=>{
    try{
      await Posts.destroy({where:{},truncate: true}).then(()=>handleSucess(res, ' delete all success'))
    }catch(err){
      handleError(401, res, next, err)
    }
  }
};
module.exports = postsController;
