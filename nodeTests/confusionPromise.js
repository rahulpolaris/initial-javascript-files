


const newPromise = () =>{
    console.log("inside a new promise")
    return new Promise((resolve,reject)=>{
        if(3>2)
        {
            resolve('payload data')
        }
        else
        {
            reject('no 3 is not grtreater than two')
        }
    })
}

// console.log(newPromise().then((a)=>{return a}))
async function init1()
{
    const data=await newPromise()
    console.log("inside async init1")
    console.log(data)
}
async function init2()
{   console.log("inside async init 2")
    await init1()
    console.log("is this undefined")}
// console.log(p)
init2()