function product(name,price,functionality,callback){
    this.name = name;
    this.price = price;
    this.functionality = functionality;
    this.returnDetails =  ()=>{
      return {name,price,functionality}
    }
  }
  const SexDoll = new product("Tina","rs20000","pleases sexually")
  console.log(SexDoll.name)
  console.log(SexDoll.returnDetails())  
  console.log(Object.values(SexDoll))
  console.log(Object.keys(SexDoll))
console.log("____________________________________________________________")


//trying add functions in prototype
function Book(bookName,author,year){
    this.bookName=bookName;
    this.author=author;
    this.year=year;
    this.showDetails = ()=>{
        return {bookName,year,author}
    }
}
//prototyping---------------------------
Book.prototype.getDetails = function(){
    return {bookNaaame:this.bookName,yeeeear:this.year,authooor:this.author}
}
Book.prototype.changeAuthor = function(newAuthor){
    this.author = newAuthor
}
//prototype to manipulate object properties
const ramayana =  new Book("Ramayana", "Tulsidas", "2010")

 console.log(ramayana.getDetails())
 console.log(ramayana.showDetails())

 ramayana.changeAuthor("kalicharan")
console.log(ramayana.getDetails())
console.log(ramayana)

console.log("____________________________________________________________")

//Inheritance------------------------------------------------------------------------
 function Magazine(bookName,author,year,trend)
 {
     Book.call(this,bookName,author,year); 
     this.trend = trend;
 }
 Magazine.prototype=Object.create(Book.prototype)

 const vogue = new Magazine("Vogue","SJW","2019","Faminism")
 console.log(vogue.getDetails())
 console.log(vogue)
 console.log("_______________________________________________________________________________________")

 //-----------------------------------------------------------Testing classes--------------------------------------------------------------------------
 class Job {
     constructor(title,type,pay)
     {
         this.title=title;
         this.type=type
         this.pay=pay
         this.showDetails = ()=>{
             return {title:this.title,type,pay}
         }
     }
     getDetails(){
         return {title:this.title,type:this.type,pay:this.pay}
     }
 }

 const plumber = new Job("Plumber","fixingWaterSuplly","10000")
 console.log(plumber.getDetails())
 console.log("********")
 console.log(plumber.showDetails())

 console.log(plumber)

 //class inheritance---------------------------------
 class Dev extends Job{
     constructor(title,type,pay,someEnd,experience)
     {
         super(title,type,pay)
         this.watEnd = someEnd
         this.experience = experience
     }
     workRec()
     {
         return {end:this.watEnd, experience:this.experience}
     }
 }
 const rahul = new Dev("webDev","web Aplications","1 billion","full Stack","infinite")
 console.log(rahul.getDetails())
 console.log("#######################")
 console.log(rahul.showDetails())
 console.log("#######################2")
 console.log(rahul.workRec())
 console.log(rahul)