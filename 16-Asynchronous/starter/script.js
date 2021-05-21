'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//Asynchronous JS 
//Most code is synchronous,which means the execurtion context makes it run
//line by line

//Asynchronous code is executed after a task that runs in the "background"
//finished. Asynchronous code is non-blocking.
//Execution doesn't wait for an asynchronouse task to finish its work
//Callback functions alione do not make code asynchronous

//What is AJAX?
//AJAX stands for Asynchronous JavasCript and XML: Allows us to communicate
//with remote web servers in a asynchronous way . With AJAX, we can request 
//data from web servers dynamically.

//What is an API?
//an API is a piece of software that can be used by another piece of software 
//in order to allow applications to talk to each other;

//There are many types of API
//DOM API
//GEOLOCATION API
//OWN CLASS API

//"Online " API: Applicarion running on a server that receives requests for data
//and sends data back as a response/

//We can build our own web APIs (requires back end development)

///////////////////////////////////////////////////////////////////////

const request= new XMLHttpRequest();//OLD SCHOOL WAY

request.open('GET','');


