let n = prompt();

let counter = 0;

for(let i = 1; i <= n; i++){
    let x =  n - i;

    if( i % 2 == 1){
        let r = num(i);
        let sps = (i + i + 1 + r + 4)
        let add_sps = "";
        for(let q = 1; q <= sps; q++){
            add_sps += " "
        }
        console.log(add_sps + "remaining = " + x + "\n" );
        continue
    }

    let str = "";

    for(let k = 1; k <= i; k++){
        str = str + " ";
    }

    for(let j = 1; j <= i; j++){
        str = str + "*";
    }
    counter += i;
    
    console.log(str + "-" + i + "    remaining = " + x);

  



}
console.log("Total = " + counter);



function num(x){
    x = x.toString();
    
    return x.length;
}
