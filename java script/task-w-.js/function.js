//   function Addition(a, b) {
//     return a + b;
//   }

//   console.log("Addition = ",Addition(5,4));

  
//   function Subtraction(a, b) {
//     return a - b;
//   }

//   console.log("Subtraction = ",Subtraction(5,4));

//   function Multiplication(a, b) {
//     return a * b;
//   }

//   console.log("Multiplication = ",Multiplication(5,4));

//   function 	Division(a, b) {
//     return a / b;
//   }

//   console.log("Division = ",Division(16,4));



// //A function expression can be stored in a variable
//   const x = function (a, b) {
//     return a * b
//   };

//   let z = x(4, 3);
//   console.log(z);


// //Function Hoisting
//   console.log(myFunction(5));



//   function myFunction(y) {
//     return y * y;
//   }


//   //Self-Invoking Functions

//   (function () {
//     console.log("java script Functions");
//   })();



//   function myFunction(a, b) {
//     return a * b;
//   }
//   let dx = myFunction(4, 3);
//   console.log(dx);



//   function myFunction(a, b) {
//     return a * b;
//   }
//   let ds = myFunction(4, 3) * 2;
//   console.log(ds);


  // ES5
//   var x = function(x, y) {
//       return x * y;
//   }

//     console.log(x(3, 5));
  
  // ES6
// const x = (x, y) => x * y;
// console.log(x(5, 2));




//   var x = function() {
//     return 15;
//   }
// console.log(x());

//   const x2 = () => 10;
// console.log(x2());


// let a = (x, y) => x / y;

// console.log(a(1000, 20));


// const popo = function (x, y) {
//     if (y === undefined) {
//       y = 2;
//     }  

//     return x * y;
//   }

//   console.log(popo(100, 20));


// const popo = function (x, y) {
//     if (y === undefined || x === undefined) {
//       x = 10
//       y = 2;
//     }  

//     return x * y;
//   }

//   console.log(popo());


// function myFunction(x, y = 10) {
//   return x + y;
// }

// console.log(myFunction(5));


// function myFunction(x = 10, y = 10 ) {
//   return x + y;
// }

// console.log(myFunction());


// function myFunction(x, y) {
//   return x + y;
// }

// console.log(myFunction(  ));



// function sum(...gojo) {
//   let sum = 0;
//   for (let x of gojo){
//     sum += x;
//   } 
//   return sum;
// }

// let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(x);



// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// var a = sumAll(x);
// console.log(a);



// let x = myFunction();            

// function myFunction() {
//   return this;
// }

// console.log(x.myFunction);


// const x = {
//   firstName:"Nadimul",
//   lastName: "Hasan",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
        
// console.log(x.fullName());  





//The Arguments Object                                   PROBLEM

// x = find_Max(1, 123, 50, 115, 44, 88);

// function find_Max() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// var a = find_Max(x);
// console.log(a);


// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }


// console.log(person.fullName.call(person2));


const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}


console.log(person.fullName.call(person1, 'Dhaka', 'Bangladesh'));




