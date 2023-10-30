// Default parameter

function addition(a,b,c=0){
    let d=a+b;
    // alert(d);
    console.log(d);
}
addition(2,3);

// Rest parameter

function getNames(...names){
    console.log(names)
}
getNames('a','b','c','d','e')

// Spread Operator

let a=[1,2,3]
let b=[4,5,...a]
console.log(b)
let c=[...a,...b]
console.log(c)

// Object literal(key and value are having same name - (name:name,) use only one as (name,))

let name = "Ramesh";
let details = {
    name,
    Age:10,
}
console.log(details)

// Template literal


