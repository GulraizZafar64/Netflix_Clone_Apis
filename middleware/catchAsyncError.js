module.exports=theFunc=>(req,res,next)=>{
   res.setHeader('Access-Control-Allow-Origin', '*');
   Promise.resolve(theFunc(req,res,next)).catch(next)
}