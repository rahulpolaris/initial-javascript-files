var a=[];
var b=[];
a.push(2);
a.push(3);
console.log("pushed values of A are "+a);
b.push(2);
b.push(3);
console.log("pushed values of B are "+b);
if(a===b)
{
    console.log("a and b are equal");
}
else
{
    console.log("unequal");
}
var c=[4,5,"6,7"];
var d=[4,5,6,7];

console.log("given values of C are "+c);

console.log("given values of D are "+d);
if(c===d)
{
    console.log("c and d are equal");
}
else
{
    console.log("unequal c and d");
}
var e = c.toString();
var f = d.toString();
console.log("e string= "+ e);
console.log("f string= "+ f);
if (e==f)
{
    console.log("yayyy");
   
}
else
{console.log("booooo");}
// arrays when compared cannot be equal because arrays are objects in javascript... so when equating them.... even though arrays has same elements... javascript treats them as different objects and the answer is false.... so to compare them.. compare each of their individual elements... or convert them to string