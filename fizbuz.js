var i;
for(i=0; i<=100; i++)
{
    if (i%3==0)
    { if(i%15==0)
       {console.log("FizzBuzz");}
       else
       {
           console.log("fizz");
       }
    }
    else if(i%5==0)
    { if(i%15==0)
       {console.log("FizzBuzz");}
       else
       {
           console.log("Buzz");
       }
    }
    else 
   {console.log(i);}  
}