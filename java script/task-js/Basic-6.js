 let x = 123;   

 let i = 0;

 while(x>0){

    let t = x % 10;
    x = x - t;

    x = x / 10;
    // console.log(t);

    i = i * 10;

    i = i + t;

    //x = 123, t = 3, i = 3

    //x = 12, t = 2, i = 32

    //x = 1, t = 1, i = 321

    //x = 0

    
 }

 console.log(i);

