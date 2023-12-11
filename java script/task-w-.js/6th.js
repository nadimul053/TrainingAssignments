let n = parseInt(prompt("Enter number : "));


for(let i = 1; i <= 10;  i=i+1) {

    if(i % 2 == 0){
        continue
    }

    let result = i * n;

    console.log( n + '*'+ i + " = " + result);
}



