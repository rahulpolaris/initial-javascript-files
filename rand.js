i=Math.random();
console.log(Math.floor(i*6));
var r=Math.floor(i*6);
var a=[];
alert("enter 5 names")
for(var j=0;j<5;j++)
{var k;
k=prompt("Enter "+ j +" name" );
a.push(k);
}
console.log(a);
alert(a[r] + " will pay the bill");