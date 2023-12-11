// let x = prompt();
// let y = prompt();

// function multiplication(a, b) {
//     return a * b;
// }

// let ans = multiplication(x, y);
// console.log(ans);




// var x = parseInt(prompt("Enter Number: "));
// var y = parseInt(prompt("Enter Number: "));
// var z = parseInt(prompt("Enter Number: "));

// function Avarage(a, b, c){
//         var avarage = (a + b + c) / 3;
//         return avarage;
//     }
    
    
// let ans = Avarage(x, y, z);
    
// console.log("average : " + ans);  



// let x = parseInt(prompt("Enter Number: "));
// let y = parseInt(prompt("Enter Number: "));

// function divide(a, b) {

//     if(b == 0){
//         return "ERROR";
//     }
//     else{
//         return a / b;
//     }
    
// }

// console.log(divide(x, y));




// let x = parseInt(prompt("Enter First Number: "));
// let y = parseInt(prompt("Enter Second Number: "));

// function divide(a, b) {
    
//     // console.log(a / b);

//     var Modulus = (a % b);

//     return Modulus ;
// }

// let ans = divide(x, y);
// console.log(ans);



// let number = prompt("Enter number: ");




// if(number % 2 == 0) {
//     console.log("True");
// }

// else {
//     console.log("false");
// }


// let x = parseInt(prompt("Enter Number: "));

// function even(a){
//     if(a % 2 == 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(even(x));



// let x = parseInt(prompt("Enter number : "));


// for(let i = 1; i <= 10;  i++) {

//     // if(i % 2 == 1){
//     //     continue
//     // }

//     let result = i * x;

//     console.log( x + '*'+ i + " = " + result);
// }





// let x = parseInt(prompt("Enter number : "));

// function namta(a){
//     for(let i = 1; i <= 10;  i++) {

//         // if(i % 2 == 1){
//         //     continue
//         // }
    
//         let result = i * a;
    
//         console.log( a + '*'+ i + " = " + result);

//         // if(i == 10){
//         //     break
//         // }
//     }
    
// }

// namta(x);



// let arr = [1, 2, 3, 4, 10, 20, 4]
// let Sum = 0;

// for (let i = 0; i < arr.length; i++) {

//     // if(arr[i] % 2 == 1){
//     //     Sum += arr[i]
//     // }
//     Sum += arr[i]
     
// }
// console.log(Sum);

                                                    //Function

// let arr1 = [10, 11, 10, 11, 10, 11, 10, 11]

// function Sum(x){
//     let sum = 0;

//     for(let i = 0; i < x.length; i++){
//          sum += x[i]
//     }
//     return sum;
// }

// console.log(Sum(arr1));

//                                                     //even

// let array2 = [10, 11, 10, 11, 10, 11, 10, 11]

// function Sum2(x){
//     let sum = 0;

//     for(let i = 0; i < x.length; i++){
//         if(x[i] % 2 == 0){
//             sum += x[i]
//         }
//     }
//     return sum;
// }

// console.log(Sum2(array2));


                                                       //odd

                                                     
// let array3 = [10, 11, 10, 11, 10, 11, 10, 11]

// function Sum3(x){
//     let sum = 0;

//     for(let i = 0; i < x.length; i++){
//         if(x[i] % 2 == 1){
//             sum += x[i]
//         }
//     }
//     return sum;
// }

// console.log(Sum3(array3));


// let n = parseInt(prompt("Enter Number: "));

// function number(x){
//     for (let i=1; i <=  n; i++) {
//         console.log(i);
//     }
// }

// number(n);


                                                      //even 


//  let eve = parseInt(prompt("Enter Number: "));

// function even_num(x){
//     for(let i = 2; i < x; i = i+2){
//         console.log(i);
//     }
// }

// even_num(eve);

                                                //odd

// let od = parseInt(prompt("Enter Number: "));
// let odd = parseInt(prompt("Enter Number: "));

// function odd_num(start, end){

//     for(let i = start; i <= end; i++){

//         if(i % 2 == 1){
//             continue
//         }

//         console.log(i);

        
//     }
// }

// odd_num(od, odd);


// let s= prompt("");

// function str(s){
//     for(let i=0 ; i < s.length ; i++){
//         console.log(s[i]);
//     }
// }

// str(s);



                                  // string reverse

                                  

//  let str = prompt("");

// function reverse_str(x){

//     let str_len = x.length;
//     let rev ="";

//     for(let i=str_len-1 ;i >= 0; i--){
//         //console.log(x[i]);
//         rev +=x[i];
//     }
//     return rev;
// }                                 

// // reverse_str(str);
// console.log(reverse_str(str));


                                                    // swap position

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function swap(array){
    let x = array[0];

    array[0] = array[array.length - 1];

    array[array.length - 1] = x

    return array;
}

console.log(swap(arr));


                                                    //check string


// function equal(x, y){

//     let counter = 0;
//      if(x.length !== y.length){
//         console.log("Both string are not same");
//      }
//      else{
//         for(let i = 0; i < x.length; i++){
//             if(x[i] == y[i]){
//                 counter++
//             }
//                 else{
//                     break
//                 }
//         }

//         if(x.length == counter){
//             console.log("Both string are same");
//         }
//         else{
//             console.log("Both string are not same");
//         }
//      }
// }

// let str1 = prompt();
// let str2 = prompt();

// equal(str1, str2);



                                                    // find sub_string



// function check(x, y){
//     let counter = 0
//     if(x.length !== y.length){
//         return false;
//     }
//     else{

//         for(let i = 0; i < x.length; i++){
//             if(x[i] == y[i]){
//                 counter++
//             }
//         }

//         if(x.length == counter){
//             return true;
//         }
//         else{
//             return false;
//         }

//     }
// }



// function sub_string(x, y){
//     if(x.length < y.length){
//         console.log("false");
//     }
//     else{
//         let trak = false;
//         for(let i = 0; i < x.length; i++){
//             let slc = x.slice(i, i+y.length)
//             let sub = check(slc, y)

//             if(sub == true){
//                 console.log("a string include b string");
//                 trak = true;
//                 break;
//             }
//         }
//         if(trak == false){
//             console.log("A string dose not contain B string");
//         }
//     }
// }          

// let str1 = prompt();
// let str2 = prompt();

// sub_string(str1,str2);