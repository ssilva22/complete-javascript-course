'use strict';
/*
console.log(document.querySelector('.message').textContent);

//What's the DOM and what Is DOM Manipulation.
//Document Object Model:Structured representation of HTML documents. Allows
// JS to access HTML Elements And Styles to manipulate Them.



//Selecting and manipulating elements.

document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

console.log(document.querySelector('.guess').value);

*/
// Handling Click Events

//We are gonna need an Event Listener, which is an action that happens on the page
//which the method turns into an action to be executed when given action occurs
const number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=number;

let score=20;

document.querySelector('.check').addEventListener('click',function(){
const guess= document.querySelector('.guess').value;
console.log(guess,typeof guess);

if (guess){
    document.querySelector('.message').textContent='No number'; 
 }else if(guess===number){
document.querySelector('.message').textContent='Correct Number';
 }else if(guess>number){
     document.querySelector('.message').textContent='too high'.textContent=score--;
     score--;
 }else if(guess<number){
     document.querySelector('.message').textContent='too low'.textContent=score--;
     score--;
 }
});

//Implementing the Game Logic




   
   
