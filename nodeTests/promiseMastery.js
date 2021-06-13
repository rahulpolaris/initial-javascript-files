

let bool = true;

const funcretrnpromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(bool)
        {
            resolve(bool)
        }
        else
        {
            reject(bool)
        }
    })
}

funcretrnpromise().then(value=>{console.log(`we are in resolved ${value}`);return 1})
.then(value=>{console.log(`we are in 2nd then with ${value+=1}`);return value+1})
.then(value=>{console.log(`we are in 3rd then with ${value}`)})//this right here outputs 3
.catch(err=>console.log(err))


function async2valuegiver(data){console.log(" ****inside async value 2");return data+1}
const newAsyncFunc = async ()=>{
    const asyncValue1 = await funcretrnpromise()
    console.log(`in async function ${asyncValue1}`)

    const asyncValue2 = await async2valuegiver(asyncValue1)
    console.log(`in async 2  function ${asyncValue2}`)
 

}
newAsyncFunc()


//  output of this file:--->
// we are in resolved true
// in async function true
//  ****inside async value 2
// we are in 2nd then with 2
// in async 2  function 2
// we are in 3rd then with 3