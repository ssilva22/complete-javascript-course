

//Importing Module
//import {addToCart, totalPrice, totalQuantity} from './shoppingCart';
//console.log('importing module');

import * as shoppingCart from './shoppingCart';
//addToCart('bread', 5);

//MODERN JS DEVELOPMENT.

//An overview of modules in JS

//A module is a reusable piece of code that encapsulates implementation 
//details

//Usually a standalone file. It doesn't need to be a file though

//Compose software: Modules are small building block that we put together
//to build complex applications.

//Isolate components:Modules can be developed in isolation without thinking 
//about an entire codebase.

//Abstract Mode: Implement low-level code in modules and import these abstractions
//into other modules.

//Organized code: Modules naturally lead to a more organized codebase.

//Modules Are importes synchronously.

//Possible thanks to top-level("static") imports, which make imports know before 
//execution

//This makes bundling and dead code elimination possible.

//console.log(totalQuantity,totalPrice);

//import add from './shoppingCart';


//The Module Pattern

/*
(function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
}) ();
*/

//Intro To NPM

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';