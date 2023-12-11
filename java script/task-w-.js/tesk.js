 const arry = ["apple", "apple", "apple", "apple",];
  let x = arry.length;

 let counterr = 0;

 for(let i = 0; i <= x; i++){

    if(arry[i] == arry[i+1]){
      counterr++
    }

 }
    if(x == counterr){

        console.log("equal");
    }
    else{
        console.log("Both strings are not same");
    }
    console.log(counterr);











const arr1 = ["apple" ,1, "apple", "apple", "banana"]

const arr2 = ["apple" ,1, "apple", "apple", "banana"]

let counter = 0;

if(arr1.length !== arr2.length){
    console.log("Both arrays are => not same");
}
else{
    for(let i=0; i<arr1.length; i++){

        if(arr1[i] ==arr2[i]){
            counter++
        }
    }

    if(arr1.length == counter){
        console.log("both arrays are same");
    }
    else{
        console.log("Both arrays are not same");
    }
    console.log(counter);
}
