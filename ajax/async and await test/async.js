// alert("hello")

const sendRequest=(uri)=>{
    return new Promise((resolve,reject)=>{
      if(uri==="google")
      { 
          console.log("connecting to google")
          resolve("google says hi")
      }
      else{
          reject("can only connect to google")
      }
    })
}

const processRequest = (res)=>{
    return new Promise((resolve,reject)=>{
        console.log("processing response")
        resolve(`processed req is ${res}`)
    })
}

// sendRequest("google")
// .then(res=>processRequest(res))
// .then(data=>console.log(data))
// .catch((err)=>{console.log("some error occured "+err)})

const handleConnection = async ()=>{
try{
    const uri = "google"
    console.log("before getting data")
    const data = await sendRequest(uri);
    console.log("after getting data")
    const proData = await processRequest(data)
    console.log("after processing data")
    console.log("processed data is " + proData)
  
}
catch(err){
    console.log(err)
}
}

handleConnection()