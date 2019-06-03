function mul(a,b){
    return a*b;
}

// **************************
let add = (a,b) => a+b;

function Positive(n){
    return n>=0;
}

// **************************
let isPositive = (a) => a>=0;

// **************************
let randomNumber =  () => Math.random;
var a = randomNumber()
console.log(a())

// **************************
document.addEventListener('click',() => console.log('click'));