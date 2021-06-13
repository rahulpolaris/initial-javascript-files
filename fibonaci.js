  
function fibonacciGenerator(){
    var a=0;
var b=1;
var c=[];
var temp;

for (var i=0;i<n;i++)
    {if(i===0){c.push(a);}
       else if(i===1){c.push(b);}
       else { temp=a+b;
           c.push(temp);
           a=b;
           b=temp;
             }}
return c;
} 
var n=prompt("enter a number upto which fibonaci should be displayed")
var k=fibonacciGenerator(n);          
console.log(k);