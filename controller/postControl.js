const handleError = require('../utils/handleError');
const handleSucess = require('../utils/heandleSucess');
const { Posts  } = require('../models/postsModel');

const postsController = {
  findAllInformation: async(req, res, next) => {
    const allInformation = await Posts.findAll();
    handleSucess(res, allInformation)
    // res.status(200).send({
    //   success:'success',
    //   infomation:allInformation
    // })
  },
  findOneInformation: async(req, res, next)=>{
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
  },
  createInformation:(req, res, next)=>{
    try{
      const title = req.body.title.trim();
      const id = Date.now();
      console.log(id, 'id')
      const data = { title, id };
      Posts.create(data).then(()=>{
        handleSucess(res, data);
      }).catch((err)=>{
        handleError(400, res,next,err);
      });
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
      await Posts.destroy({where:{id}}).then(()=>handleSucess(res, 'delete success'));
    }catch(err){
      handleError(401, res, next, err)
    }
    
  },
  deleteAllInformation:()=>{}
};
module.exports = postsController;
