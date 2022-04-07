function funcA(cb, delay=500)
{
    return (...args)=>{
        cb(args)
    }
}