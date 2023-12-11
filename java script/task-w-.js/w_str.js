// let n = prompt();

// console.log(count(n));

// function count(x){

//     let counter = 0;

//     for(let i = 0; i < x.length; i++){
//         let letter = x[i];
//         if(letter == "a"|| letter == "e" || letter == "i" || letter == "o" || letter == "u" ||
//          letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
//             counter++              
//         }
//     }
//     return  counter;
// }



// let n2 = prompt();

// console.log(consonants(n2));

// function consonants(x){

//     let new_str = "";
//     for(let i = 0; i < x.length; i++){
//         let letter = x[i].toLowerCase();
//         if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//             continue
//         }
//         else{
//             new_str += x[i];
//         }
//     }
//     return  new_str;
// }



// let n = parseInt(prompt("enter number of elements : "));

// let arr = [];

// for(let i = 0; i < n; i++){
//     arr[i] = parseInt(prompt("enter element"));
// }





// console.log(arr2);

// function sum_array(array){

//     let sum = 0;

//     for(let j = 0; j < array.length; j++){
//         sum = sum + arr[j];
//     }
//     return sum;
// }

// console.log(sum_array(arr));




// function array_even_position(array){
//     let arr = [];
//     for(let i = 0; i< array.length; i++){
//         if(i%2 == 0){
//             arr.push(array[i])
//         }
//     }
//     return arr;
// }
// console.log(array_even_position(arr));



// function sum_even_array(array){

//     let sum = 0;

//     for(let j = 0; j < array.length; j++){

//         if(array[j] % 2 == 0){
//             //sum = sum + arr[j];
//             sum++
//         }

        
//     }
//     return sum;
// }
// console.log(sum_even_array(arr));




// function array_odd_position(array){
//     let arr = [];
//     for(let i = 0; i< array.length; i++){
//         if(i%2 !== 0){
//             arr.push(array[i])
//         }
//     }
//     return arr;
// }
// console.log(array_odd_position(arr))




// function sum_odd_array(array){

//     let sum = 0;

//     for(let j = 0; j < array.length; j++){

//         if(array[j] % 2 == 1){
//             sum = sum + arr[j];
//         }

        
//     }
//     return sum;
// }
// console.log(sum_odd_array(arr));







// function sum_array(array, start, end){

//     let sum = 0;

//     for(let j = (start- 1); j < end; j++){
//         sum = sum + array[j];
//     }
//     return sum;
// }

// let x = prompt("Enter start position : ");
// let y = prompt("Enter end position : ");
// let arr = [1, 2, 3, 4]
// console.log(sum_array(arr, x, y));


// let arr = [1, 2, 3, 4, 5, 7]


// function shift(array, x) {

//     for(let i=0; i < x; i++){ 

//         let store = array[0];

//         for(let i=0; i< array.length; i++){
//             array[i]=array[i+1];
//         }

//         array[array.length-1]= store;
//     }
//     return array;
// }

// let x = prompt();
// console.log(shift(arr, x));






let str1 = "The LanGuagE For Building Web Pages";


// function upper_case(str){

//     let up_str = "";

//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toUpperCase()){
//             up_str += str[i];
//         }
//     }
//     return up_str;
// }
// console.log(upper_case(str1));





// function lower_case(str){

//     let lower_str = "";


//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toLowerCase()){
//             lower_str += str[i];
//         }
//     }
//     return lower_str;
// }
// console.log(lower_case(str1));