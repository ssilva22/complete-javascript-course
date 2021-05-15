'use strict';

//Prototype-based object-oriented.

//In a language with first-class functions,functions are simply treated as variables.We
//can pass them into other functions,and return them for functions.

//JS is a dynamically typed-language

//The javaScript Engine and Runtime.

//A JS engine is a computer program that executes JS Code.
//Example:Chrome's V8 Engine.

//All JS Engines have a call stack and a heap

//Difference between compilation and interpretation

//Compilation:Entire code is converted into machine code at once, and 
//written to a binary file that can be executed by a computer.


//Interpretation:Interpreter runs through source code line by line

/* 
Modern JS uses a combination between compilation and interpretation,aka
JIT (Just-in-Time-Compilation.)

Runtime in the Browser

Scope and Scope Chain

Scoping:How our program's variables are organized and accessed."Where do 
variables live? or "Where can we access a certain variable and where not""

Lexical Scoping:Scoping is controlled by placement of functions anb blocks
in the code

Scope:Space or environment in which a certain variable is declared(variable
    environment in case of functions).There is global scope, function scope,
    and block scope.

    Scope of a variable:Region of our code where a certain variable can be 
    accessed.


    The 3 types of scope:

    Global Scope:-Outside of any function or block.-Variables are declared in 
    global scope are accessible everywhere

    Function Scope: Variables are accessible only inside function,NOT  outside,-Also called local scope.

    Bloc Scope(ES6):Variables are accessible only inside the block(block scoped).
    However,this only applies to let and cosnt variables.

    Functions are also block scoped(Only in strict mode).

    The Scope Chain.


    Variable Environment:Hoisting in JS.

    Hoisting:Makes some types of variables accesible/usable in the code before
    they are actually declared.

    The this Keyword.

    this keyword:Special variable that is created for every EC takes the value of points
    from the owner of the function in which the this keyword is used.

    This is not static.It depends on how the fucntion is called,and its value is only assigned when the 
    function is actually declared.

    Regular functions vs Arrow functions
*/
var firstName='Matilda';
const sebastian={
    firstName:'Sebastian',
    lastName:'Silva',
    year:2001,
    calcAge:function(){
        console.log(this);
        console.log(2037-this.year);
    },
    greet: ()=>console.log(`Hey ${this.firstName}`),
};
sebastian.greet();