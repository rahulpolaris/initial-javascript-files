function* generatorFunc1() {
    console.log("before yield a")
    yield "a";
    console.log("after yield a & b4 yield b")

    yield "b";
    console.log("after yield b & b4 yield c")
    yield "c";
    console.log("after yield c")

}
function* generatorFunc() {
    yield "a";
    console.log("step1")
    yield "b";
    yield "c";

}
let genratorObject = generatorFunc1()
genratorObject.next()
genratorObject.next()
genratorObject.next()
genratorObject.next()
/****************************************************************** */
console.log("************************************************************")
function* generatorFunc2() {
    yield "a2";

    yield "b2😂";
    yield "c2";
    return "return value"

}
let genratorObject2 = generatorFunc2()
console.log(genratorObject2.next())
console.log(genratorObject2.next())
console.log(genratorObject2.next())
console.log(genratorObject2.next())
console.log(genratorObject2.next())


console.log("********************************************************************")
let arr = [...generatorFunc2()]
console.log(arr)
for (let letter of generatorFunc() )
{
    console.log(letter.toUpperCase())
}

