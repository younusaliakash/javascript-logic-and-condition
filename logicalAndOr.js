var name = 'Younus'

// var fullname = 'Akash'

// if(name && fullname){
//     console.log(name)
// }else{
//     console.log(fullname)
// }
//shorCut

var fullname = name || 'Akash'
console.log(fullname)

var itsOK = false

itsOK && console.log('The result is Ok')