


const newPromise = () =>{
    return new Promise((resolve,reject)=>{
        if(3>2)
        {
            resolve('yes 3 is greater than 2')
        }
        else
        {
            reject('no 3 is not grtreater than two')
        }
    })
}

// console.log(newPromise().then((a)=>{return a}))
async function init()
{
    const a=await newPromise()
    // console.log("inside async")
    // console.log(a)
}
async function init2()
{
    const b = await init()
    console.log(b)}
// console.log(p)
init2()