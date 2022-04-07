const a = "rahul is starting again";
const body = document.body
function lineBreak(){
    const Break=document.createElement('br')

    document.body.appendChild(Break)
}

console.log(a);
const createdH3 = document.createElement("h3");
const node = document.createTextNode("hello there");
createdH3.appendChild(node);

const Body = document.getElementsByTagName("body");
document.body.appendChild(createdH3);
const innput = document.createElement("input");
innput.setAttribute("type", "text");
document.body.appendChild(innput);
lineBreak()
const h2=document.createElement('h2');
h2.innerText = 'Default:'
document.body.appendChild(h2)
h2.style.display = 'inline'
const SSpan = document.createElement('span')
SSpan.style.color = "purple"
SSpan.style.fontSize="20px"
body.appendChild(SSpan)
// SSpan.innerText="SSpan"
/************************************default ends here**************** */

lineBreak()
const h21=document.createElement('h2');
h21.innerText = 'Debounce:'
document.body.appendChild(h21)
h21.style.display = 'inline'
const SS1pan = document.createElement('span')
SS1pan.style.color = "purple"
SS1pan.style.fontSize="20px"
body.appendChild(SS1pan)

/***********Debounce logic starts here */
const updateDebounceText = debounce((text)=>{
  SS1pan.innerText = text
})
innput.addEventListener("input",(e)=>{
    SSpan.innerText = e.target.value
    updateDebounceText(e.target.value)
})



  function debounce(cb, delay=1000)
  {
     return (...args)=>{
         setTimeout(()=>{
             cb(args)
         },delay)

     }
  }