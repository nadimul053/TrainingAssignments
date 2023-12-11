// let n = prompt(); 

// let num = (n * 2 - 1);

// for (let i = 0; i < n ; i++) { 
//     let str = "* "; 
//     let space = '  '; 
//     console.log(space.repeat( i ) + str.repeat( num )); 
//     num = num - 2
// }



// let n = prompt(); 
// for (let i = 1; i <= n; i++) { 
//     let str = "* "; 
//     let space = '  '; 
//     console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }




function even_str(str){

    let new_str = "";
    for(let i = 0; i < str.length; i++){
        if(i % 2 == 0){
            new_str += str[i];
        }
    }
    return new_str;

}

let input = prompt();

console.log(even_str(input));




