let str = prompt();
let strLen = str.length;
let rev = "";

for(let i=strLen-1 ;i >= 0; i--){
    rev +=str[i];
}

console.log("Reverse = " , rev);


// 