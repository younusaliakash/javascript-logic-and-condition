//Logcal operator
// && ,||, !

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// A || B
// true || false = true
// true || true = true
// false || true = true
// false || false = false

var a = 10
var b = 20
var c = 50
var d = 40

if(a > b && c > d){
    console.log("A is grater than B & C is grater than D")
}
else{
    console.log("At least one condistion is false")
}

if(a > b || c > d){
    console.log("A is grater than B or C is Grater than D")
}
else{
    console.log("At least one condition false")
}

 var check = !(a > b)
 console.log(check)
