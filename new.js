
function tweett(){
var entTweet= prompt("enter your message/tweet")
var Tlen=entTweet.length
alert("u have written "+ entTweet.length +" characters"+" you have "+ (140-entTweet.length)+ " characters left")
alert(entTweet.slice(0,141))
}
tweett();