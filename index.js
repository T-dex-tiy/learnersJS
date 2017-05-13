// VAR
//The area that is not in the curly braces is the GLOBAL scope

function bar(){//this is the start of a local or block scope
    var foo;
    //var foo's data will be taken outside of the scope and moved to the global scope
    foo = 3;
    console.log(foo);
}
bar();

function foo(){
    bar = 4;
    // the computer reads the var first and moves it to the top right after the curly braces
    var bar;//
    console.log(bar)
}
foo();
// Both read the same with var as the var gets pushed to the top

debugger;

// This is a simple function
function ourFirstVarFunc() {
  var ourVar;  // here we declare our variable
  ourVar = 1;  // here we assign our variable
  console.log(ourVar);
}

ourFirstVarFunc();

function ourSecondVarFunc() {
  ourVar = 1;  // because this has not been declared, it is auto-declared as a var and assigned
  var ourVar = 3;  // this redeclares and assigns a value to the newly redeclared variable
  console.log(ourVar);
}

ourSecondVarFunc();


//Temporal Dead Zone

function yee(){
    haw = 5;
    //temporal dead zone nothing is hoisted to the top of the block
    let haw = 4;
  console.log(haw);
}
