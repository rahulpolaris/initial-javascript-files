

const users = fetch("https://api.github.com/users")
.then(res=>{
	return res.json()})







// console.log(fetch("https://api.github.com/users"))
// window.alert("hello")

function toGoogle(){
	const res = new Response
	console.log(res.headers)
	console.log("item clicked")

}

toGoogle()