
const arr = [1, 2, 3, 4, 5, 6, 7]

 var aa = arr[0];

 arr[0] = arr[arr.length-1]

 arr[arr.length-1] = aa

 console.log(arr);






// let array = [arr[0], arr[arr.length-1]] = [arr[arr.length-1] , arr[0]];






// const array = [1, 2, 3, 4, ,5 , 6, ,7]

// function swap(arr){

//     [arr[0], arr[arr.length-1]] = [arr[arr.length-1] , arr[0]]
//     return arr;
// }

// let a = swap(array);
// console.log(a);