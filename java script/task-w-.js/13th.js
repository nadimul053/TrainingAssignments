// // let s1 = prompt();
// // let s2 = s1.includes(prompt())


// // console.log(s2);


// // let s1 = prompt();
// // let s2 = prompt();
// // let counter = 0;

// // for( i = 0; i < s1.length; i++){

// //     if(s1[i] == s2[i]){
// //         counter++
// //     }
// // }

// //     if(s2.lenght==counter){
// //         console.log("True");
// //     }
// //     else{
// //         console.log("False");
// //     }




let a = prompt();
let b = prompt(); 

//a= 7; < b= 8

if(a.length < b.length){
    console.log("false");
}
else{
    let traker =  false;
    for(let i = 0; i < a.length; i++){
       let w = a.slice(i, i+b.length)
       let x = myFunction(w, b);
       
       if(x == true){
        console.log("a string include b string");
        traker = true;
        break
       }
    }
    
    if(traker == false){
        console.log("A string dose not contain B string ");
    }

}







function myFunction(x, y){
    let counter = 0
    if(x.length !== y.length){
        return false;
    }
    else{

        for(let i = 0; i < x.length; i++){
            if(x[i] == y[i]){
                counter++
            }
        }

        if(x.length == counter){
            return true;
        }
        else{
            return false;
        }
    }
}


// function loop(a, b){
//     let counter = 0;

//     if(a.length !== b.length){
//         console.log(false);
//     }
//     else{
//         for(let i = 0; i < a.length; i++){
//             if(a[i]==b[i]){
//                 counter++
//             }
//         }

//         if(a.length == counter){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }

























