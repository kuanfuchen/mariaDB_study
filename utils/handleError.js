const errorInformation = ( errorCode,res, next, errMessage)=>{
  const error = new Error(errMessage)
  res.status(errorCode).json({
    status:'false',
    data:errMessage
  });
  res.end();
  next(error)
};
module.exports = errorInformation;