    // let N = 10;
    // let i,j;

    // for( i=1; i<=N; i = i + 2){

    //     for( j=1; j<=i; j++){
    //         document.write("*");
    //     }
        
    //     document.write(" ");
    // }


    function pattern(x){
        let star = "";

        for(let i = 1; i <=x; i++){
            for(let j = 1; j<=i; j++){
                star= star + "*";
            }
            star = star + " ";
        }
        return star;
    }

    let N = prompt();
    console.log(pattern(N));
    

