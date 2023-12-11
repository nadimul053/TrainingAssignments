let n = prompt();
let star = "";

let x = n / 2

for(let i = 0; i <= n; i++){

    for(let j = 1; j <= n; j++){
        if(j == (i + 1) || j == (n - i)){
            star += "*"
        }
        else{
            star += " "
        }
    }

    if(i == x){
        star += "*"
    }

    console.log("\n");


}

console.log(star);

// if(j ==  i || j == (n - i)){
//     star = star + "*" 
// }
// else{
//     star += " ";
// }