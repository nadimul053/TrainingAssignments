let a = prompt();
let b = prompt();

function divide(a, b) {

    if(a == 0 || b == 0){
        return "ERROR";
    }
    else{
        return a / b;
    }
    
}

console.log(divide(a, b));
