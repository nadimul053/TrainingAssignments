let num = prompt();

for(let i = 1; i <= num; i++){

   for(let j = 1; j <= i; j++){
       document.write(j);
   }

   for(let k = (i - 1); k >= 1; k--){
       document.write(k);
   }

   document.write("<br>");

}