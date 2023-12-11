let s = prompt("");
//asdf
let ans = s;
let len = s.length;
let i,j;

for (i=0; i<len; i++){
    console.log(ans);//...f
    ans = ans.slice(0,i) + "." + ans.slice(i + 1);   // ans = "..." + "." + "" = ....
}
console.log(ans);



// var str = "nadimul hasAn"

//    var x = str.replace(/a/gi, "P");

//        console.log(x);






//        var str = "hello world";

//         var x =  str.replace(0,"H");

//        console.log(x);


