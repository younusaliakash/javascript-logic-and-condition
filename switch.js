var date = new Date ()

var today = date.getDay ()
// console.log(today)

switch(today){
    case 0 :
        console.log("Today is Sunday")
        break
    case 1 :
        console.log("Today is Monday")
        break
    case 2 :
        console.log("Today is Tuesday")
        break
    case 3 :
        console.log("Today is Wedesday")
        break
    case 4 :
        console.log("Today is Thusday")
        break
    case 5 :
        console.log("Today is Friday")
        break
    case 6 :
        console.log("Today is Saturday")
        break
}