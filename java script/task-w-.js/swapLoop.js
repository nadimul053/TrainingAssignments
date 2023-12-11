let array = ["Banana", "Orange", "Apple", "Mango", "kiwi"]


function swap_array(arr){

    let end = arr.length / 2;
    console.log(end);

    for(let i = 0; i+1 <= end; i++){

        let x = arr[i];

        arr[i] = arr[arr.length -(1 + i)];

        arr[arr.length - (1+i)] = x;
    }

    return arr;
}

// let wq = swap_array(array);
// console.log(wq);
console.log(swap_array(array));

