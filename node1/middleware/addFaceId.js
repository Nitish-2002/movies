const addt=(req,res,next)=>{
    req.headers.traceId="18";
    next();
}
export default addt;