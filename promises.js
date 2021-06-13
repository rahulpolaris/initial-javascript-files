let aNewPromise =()=>{
    return new Promise((resolve,reject) =>{
    let d = true
    if(d){
        resolve("a promise resolve element true")
        return bNewPromise
        
       
       
    }
    else
    {
        reject("task failed passed to catch")
    }
})
} 

let bNewPromise = ()=>{
	return new Promise((resolve,reject)=>{ if(false){resolve("yoloYes")}
     else{reject("yoloNo")}})
}







aNewPromise().then((s)=>{console.log(`Promise parent resolve elemet: ${s}`);return bNewPromise()})
.then((l)=>{console.log(`Promise child element is: ${l}`)})
.catch((k)=>{console.log(`promise reject element: ${k} `)})



//above we've used promises using traditional method.. below we have used async await to handle promises
const asyncFunc = async () => {
	try{
		const promiseA = await aNewPromise()
	console.log(`this is awaited promiseA : ${promiseA}`)
	const promiseB = await bNewPromise()
	console.log(`this is awaited promiseB: ${promiseB}`)

	}
	catch(err){
		console.log("asynced catched eroor: " +err)
	}
	


}
asyncFunc()