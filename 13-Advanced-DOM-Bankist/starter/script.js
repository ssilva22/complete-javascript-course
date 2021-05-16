'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//How the DOM really works behind the scenes

//The DOM is the interface between JS and the Browser.

//Allows us to make JS interact with the browser

//We can write JavaScript to create,modify, and delete HTML elements;
//set styles, classes and attributes;and listen and respond to events;

//DOM tree is generated from an HTML document, which we can then interact with.

//DOM is a very complex API that contains a lot of methods and properties to
//interact with the DOM tree.

//.querySelector() / .addEventListener() / .createElement() 
//.innerHTML / .textContent / .children / .childNodes 
//.parentNode / .cloneNode() / .append() / .remove()
//.setAttribute() / etc ... 

//What makes the DOM work?? One word... Inheritance.

//Selecting Creating And Deleting Elements.

//

const header= document.querySelector('.header');
document.querySelector('.section');

const allSections= document.querySelectorAll('.section');

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

document.getElementsByClassName('btn');


//Creating and Inserting Elements
//.insertAdjacentHTML.

const message= document.createElement('div');
message.classList.add('cookie-message');
message.textContent = `We use cookies for improved functionality,
performance, and analytics`;
message.innerHTML = `We use cookies for improved functionality,
performance, and analytics. <button class="btn btn--close-cookie">
Got it!</button>`;

header.prepend(message);
header.append(message);

//Delete elements

document.querySelector('btn--close-cookie')
.addEventListener('click',function(){
  message.parentElement.removeChild(message);
});


//Styles, Attributes, And Classes.

//Styles

message.style.backgroundColor= '#37383d';
message.style.width= '120%';

console.log(getComputedStyle(message));

console.log(getComputedStyle(message).width);

message.style.height= Number.parseFloat(getComputedStyle(message).height,10)+40+ 'px';

document.documentElement.style.setProperty('--color-primary','orangered');

//Attributes

const logo= document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); 
logo.setAttribute('company','Bankist');

//Implementing Smooth Scrolling
const btnScrollTo=document.querySelector('.btn--scroll-to');

const section1= document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords= section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)',window.pageXOffset,pageYOffset);

  console.log('height/width viewport',document.documentElement.clientHeight,
  document.documentElement.clientWidth);


  //Scrolling
  window.scrollTo(
    s1coords.left+window.pageXOffset,
    s1coords.top+ window.pageYOffset
    );

});


window.scrollTo({
  left: s1coords.left + window.pageXOffset ,
  top: s1coords.top+ window.pageYOffset,
  behavior: 'smooth',
})

//Types Of Events And Event Handlers

const h1= document.querySelector('h1');

const alertH1=function(e){
  alert('addEventListener: Great! You are readinf the heading :D')

 // h1.removeEventListener('mouseenter',alertH1); If you just want to use once
 //setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);
 //Does the same thing but with a timer applied to it.
}

h1.addEventListener('mouseenter',alertH1);
/*
h1.onmouseenter= function(e) {
  alert('onmouseenter: Great! You are reading the heading :D');
}
*/
 
//Event Propagation : Bubbling And Capturing

