
var houseKeeper = {name:"jimmy", 
                   yearsOfExperience:8, 
                   skills:["lifting","cooking"],
                   hasWorkPermit:true, 
                   moveSuitCase:function(){ alert("may i take your suitcase"); // a method is made inside object by using anonymous function teknique
                                            return "suitcase picked by "+this.name;} }

function HouseKeeper (name, yearsOfExperience, skills, hasWorkPermit) 
                      { this.name= name;
                        this.yearsOfExperience= yearsOfExperience;
                        this.skills=skills;}
var housekeeper1 = new HouseKeeper( "simran" ,12 ,["rowing","coding","cooking"]);    



function product(name,price,functionality,callback){
  this.name = name;
  this.price = price;
  this.functionality = functionality;
  this.returnDetails =  ()=>{
    return {name,price,functionality}
  }
}




 const car =  new product("maercedes",
 "rs5000000",
 "Drives fasts and elegantly"
//  , ()=>{
//    return this.name
//   }
  )

//  car.callback()


console.log("Objects and Methods js")
console.log(`in main ${car.name}`)
// console.log( car.callback)





// const getProdDetails = ()=>{
  // return this.functionality
// }

const SexDoll = new product("Tina","rs20000","pleases sexually")
console.log(SexDoll.name)
console.log(SexDoll.returnDetails())