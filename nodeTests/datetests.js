

console.log("--------------------------------------------------------------------------------")
let d =  new Date()
console.log(d,"-----d--------") //2021-06-19T09:33:44.665Z <-current time
console.log(d.toString(),"d.toString")// Sat Jun 19 2021 15:03:44 GMT+0530 (India Standard Time)  <--curretn time in string
console.log(d.toLocaleDateString(),"d.toLocaleDateString")
console.log(d.toISOString(),"d.toISOString")// 2021-06-19T09:33:44.665Z <-- current rime

let milliSecsPastUnixTime = new Date(1164411006456)
console.log(milliSecsPastUnixTime,"milliSecsPastUnixTime") //2006-11-24T23:30:06.456Z

const dateInput = new Date("2021-06-17T04:33:33+10:00") //+10 is utc or gmt time header it can be plus or minus dependding on the 
console.log(dateInput,"dateInput")

let individualDatePropertyInputs = new Date(2021, 1, 19, 12, 45, 30, 0) //time zone is gonna be local time zone from the device
console.log(individualDatePropertyInputs,"individualDatePropertyInputs","WARNING: MONTH IS ALWAYS INCREMENTED BY 1 IN THIS KIND OF INPUT APPROACH")
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds())
console.log(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDay(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds())