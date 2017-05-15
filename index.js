// // VAR
// //The area that is not in the curly braces is the GLOBAL scope
//
// function bar(){//this is the start of a local or block scope
//     var foo;
//     //var foo's data will be taken outside of the scope and moved to the global scope
//     foo = 3;
//     console.log(foo);
// }
// bar();
//
// function foo(){
//     bar = 4;
//     // the computer reads the var first and moves it to the top right after the curly braces
//     var bar;//
//     console.log(bar)
// }
// foo();
// // Both read the same with var as the var gets pushed to the top
//
// debugger;
//
// // This is a simple function
// function ourFirstVarFunc() {
//   var ourVar;  // here we declare our variable
//   ourVar = 1;  // here we assign our variable
//   console.log(ourVar);
// }
//
// ourFirstVarFunc();
//
// function ourSecondVarFunc() {
//   ourVar = 1;  // because this has not been declared, it is auto-declared as a var and assigned
//   var ourVar = 3;  // this redeclares and assigns a value to the newly redeclared variable
//   console.log(ourVar);
// }
//
// ourSecondVarFunc();
//
//
// //Temporal Dead Zone
//
// // function yee(){
// //     haw = 5;
// //     //temporal dead zone nothing is hoisted to the top of the block
// //     let haw = 4;
// //   console.log(haw);
// // }
// //  yee();
//
//  //let
//  //introduced in ES6
//  //Mirrors many of the items of var when coming to redeclaring.
//  // Big change was where the data gets pushed to. let hijacks the block and pushes the data to the top of the block only not all the way to the global.
//  function barToo(){//this is the start of a local or block scope
//      let foo;
//      //let foo's data will be taken outside of the scope and moved to the global scope.
//      foo = 666;
//      console.log(foo);
//  }
//  barToo();
//
//  //CONST
//  //This was the second keyword that was intorduced in ES6.
//
//  const whoop = 5;
//  // Redeclaring a const will throw an error
//  whoop = 5;
//
//  // Both let and const are helping with minimizing mutabilty of the state. More data is being passed along and with the simpilicty of var it does allow for a little too much changing and this is one reason why you should lean towards always using let and const if possible.
// //Closures
// //This is where let become very different from var.
//
// debugger;
//
// // var in this scenario is run over each time and returns a new number. The scope is closed each iteration and rerun. Var will be logged as "6" Var in this instance is outside the function and runs until the 'for' requirements are fulfilled.
// for (var i=1; i<=5; i++) {
// 	(function(){
// 		setTimeout( function timer(){
// 			console.log( i );
// 		}, i*1000 );
// 	})();
// }
// //let bijacks the block and returns "i" each pass thru. It does not run the full loop each time and run turn the same number. This Syntax is a lot cleaner and returns i for each loop thru. Var runs thru all iterations of the loop before returning the data.
// for (let i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }
//
// //The examples above do log different numbers because of how "var" and "let" let the function work with the data "i" and the use of them each time it is run thru the function.
// //This also shows closure as well. The Data is built and retained with in the block of the function and garbage collect once the block is finshed.
//
//
//
// //Closures are when a var/let/const is contained within a block but can be used. This contains the data that is needed with in the block but does not allow it to be accessed out side the block.

function makeFunc() {
  let name = 'Mozilla';
  function displayName() {
    console.log();(name);
  }
  return displayName;
}

let myFunc = makeFunc();
myFunc();
