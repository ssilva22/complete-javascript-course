'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//How to Plan A Web Project.

//Project Planing
/* 
-User Stories:Description of the app's functionality from the user perspective
-Features
-Flowchart
-Architecture.*/

navigator.geolocation.getCurrentPosition(function(){
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    
},function(){
    alert('Could not get your position');
});

//Asynchronous JS 