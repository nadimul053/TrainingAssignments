// let str = "nadimul hasan"

// let arr = [...str];

//console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >="a" && arr[i] >= "z"){
//         arr[i] -= 32;
//     }
//     str = arr.join()
// }



// let str = "naDImul haSASn@121"

// let new_str = "";

// for(let i = 0; i < str.length; i++){
//     if(str[i] >="a" && str[i] <= "z"){
//        let store = str.charCodeAt(i) - 32;
//        new_str += String.fromCharCode(store)
//     }
//     else if(str[i] >="A" && str[i] <= "Z"){
//        let store = str.charCodeAt(i) + 32;
//        new_str += String.fromCharCode(store)
//     }
//     else{
//         new_str += str[i];
        
//     }
    
    
// }
// console.log(new_str)




// let new_str = "";

// for(let i = 0; i < str.length; i++){
//     if(str[i] >="A" && str[i] <= "Z"){
//        let store = str.charCodeAt(i) + 32;
//        new_str += String.fromCharCode(store)
//     }
//     else{
//         new_str += str[i];
//     }
// }
// console.log(new_str)
// console.log(str)



let str1 = "01234"


for(let i = 0; i < str1.length; i++){

        let store = str1.charCodeAt(i);

        let x = store - 48 

        console.log(x);
        
}


// x = 11

// x = 123
