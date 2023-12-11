let s = prompt("");

let ans = s;
let len = s.length;
let i,j;

for (i=0; i<len ; i++){
    console.log(ans);
    ans = ans.slice(0,i) + "." + ans.slice(i + 1);    
}

// let ans = s;
// let len = s.length;
// let i,j;

// for (i=0; i<len; i++){
//     console.log(ans);
//     ans = ans.slice(0,i) + ans.slice(i + 1);    
// }

