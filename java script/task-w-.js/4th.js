
let a = parseInt(prompt("Enter First Number: "));
let b = parseInt(prompt("Enter Second Number: "));

function divide(a, b) {
    
    console.log(a / b);

    var Modulus = (a % b);

    return Modulus ;
}

let ans = divide(a, b);
console.log(ans);