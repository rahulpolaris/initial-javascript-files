var a= Math.floor(Math.random()*6+1);
var b= Math.floor(Math.random()*6+1);
if (a>b){
  setimg();
  document.querySelector("h1").innerText="🚩player 1 wins";
}
else if(a<b){
    document.querySelector("h1").innerText="player 2 wins🚩";
  setimg();
}
else if(a==b){
    document.querySelector("h1").innerText="🚩Draw🚩";
  setimg();
}
 function imga()
    {    if (a==1){document.querySelector("img.img1").setAttribute("src","images/dice1.png")}
    else if (a==2){document.querySelector("img.img1").setAttribute("src","images/dice2.png")}
    else if (a==3){document.querySelector("img.img1").setAttribute("src","images/dice3.png")}
    else if (a==4){document.querySelector("img.img1").setAttribute("src","images/dice4.png")}
    else if (a==5){document.querySelector("img.img1").setAttribute("src","images/dice5.png")}
    else if (a==6){document.querySelector("img.img1").setAttribute("src","images/dice6.png")}
}
  function imgb()
      {    if (b==1){document.querySelector("img.img2").setAttribute("src","images/dice1.png")}
      else if (b==2){document.querySelector("img.img2").setAttribute("src","images/dice2.png")}
      else if (b==3){document.querySelector("img.img2").setAttribute("src","images/dice3.png")}
      else if (b==4){document.querySelector("img.img2").setAttribute("src","images/dice4.png")}
      else if (b==5){document.querySelector("img.img2").setAttribute("src","images/dice5.png")}
      else if (b==6){document.querySelector("img.img2").setAttribute("src","images/dice6.png")}
    }
    function setimg()
    {
      imga();
      imgb();
    }
