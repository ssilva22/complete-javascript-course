'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

openingHours: {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
}
};
//Destructuring Arrays.
const arr=[2,3,4];
const a =arr[0];
const b =arr[1];
const c= arr[2];

const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

const [main, ,secondary]= restaurant.categories;
console.log(first,second);

let temp=main;
main=secondary;
secondary=temp;
console.log(main,secondary);

[main,secondary]=[secondary,main];
 console.log(main,secondary);

 const [starter,mainCourse]= restaurant.order(2,0);
 console.log(starter,mainCourse);

 const nested= [2,4,[5,6]];

 const [i, ,j]=nested;
 console.log(i,j);

 const [i, ,[j,k]]=nested;
 console.log(i,j,k);

 //Default Values.
 const [p=1,q=1,r=1]=[8,9];
 console.log(p,q,r);


 //Destructuring Objects
/*
 
 */

const {nameRestaurant, openingHours, categories} = restaurant;
console.log(nameRestaurant,openingHours,categories);

const {
  name:restaurantName,
  openingHours: hours,
  categories: tags,
}= restaurant;

console.log(restaurantName,hours,tags);

const {menu = [],starterMenu: starters= []}=restaurant;
console.log(menu,starters);

//Mutating Variables

let a= 111;

let b= 999;

const obj={a:23,b:7,c:14};
({a,b}= obj);
console.log(a,b);

//Nested Objects
const {fri:{open,close},}=openingHours;
console.log(fri);

//The SPREAD Operator
//Helps you pack and unpack Arrays

let arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr=[1,2,arr];
console.log(newArr);

console.log(...newArr);

//Copy array
const mainMenuCopy=[...restaurant.mainMenu];

//Join 2 arrays

const menuCombo=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays,strings, maps, sets, NOT objects

const str= "Sebastian";
const letters=[...str,' ','s.'];

//Rest Pattern and Parameters
//It does the opposite as the spread operator
//This is used to shrink an array and condense them.

//Short Circuiting (&& ||)
//They can use ANY Data Types,return ANY data Type.
///////////////////////////////////////////////////
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

//The For -of Loop
///************************************************************/*********/
///************************************************************/*********/
///************************************************************/*********/
///************************************************************/*********/


const menu =[...restaurant.starterMenu,...restaurant.mainMenu];


for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()){
  console.log(`${i+1}: ${el}`);
}


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


 // Looping Objects: Object Keys.
 //Values, and entries.

 const orderSet = new Set([
   'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
  ]);

  console.log(orderSet);

  console.log(new Set('Jonas'));

  console.log(orderSet.has('Pizza'));
  console.log(orderSet.has('Bread'));


  //MAP Method

  const question= new Map({
    ['question','What is the best programming language in the world'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'Correct'],
    [false, 'Try again!'],
  });
  console.log(question);

  //Convert Object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  //Quiz App
  console.log(question.get('question'));
  for( const [key,value] of question) {
    if (typeof key === 'number')console.log(`Answer ${key}: ${value}`);
  }
const answer = Number(prompt('Your Answer'));
console.log(answer);

question.get(question.get('correct'))=== answer;


//Which Data Structure to Use?

//Sources od Data
/*
From the program itself: Data written directly in source code(e.g:status messages)
From the UI: Data input from the user or data written in DOM (e.g tasks in todo app)
From External Sources: Data fetched for example from Web API(e.g recipe objects)

Arrays and sets should be used for manipulating data and making lists

Sets should be used when you're working with unique values.

Use Sets when high performance is really important

Use to remove duplicates from arrays.

Sets aren't meant to replace arrays but rather to complimenbt them

Objects are more traditional keys or values that are easier to write and access values with,and []

Maps are used when you need better performance that is easier to iterate and compute.
*/

//Working with Strings-Part 1




  




