let arr = [1, 2, 3, 4, 10, 20]
let Sum = 0;

for (let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 == 0){
        Sum += arr[i]
    }

     
}
console.log(Sum);