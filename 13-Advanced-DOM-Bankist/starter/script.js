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
 
//////////////////////////////////////////////////////////////////////

//Event Delegation
//Implement smooth scrolling behavior to the navigation.
/*
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id= this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth' });
  });
});
*/

//1. Add Event Listener to common parent element.
//2. Determine what element originated the event.
/*
document.querySelector('.nav__links').addEventListener('click',function(e){
  console.log(e.target);
});
*/
//Matching Strategy
if (e.target.classList.contains('.nav__link')){
  const id=e.target.getAttribute('href');
  console.log(id);
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//DOM Traversing

const h1= document.querySelector('h1');

//Going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);//not very used
console.log(h1.children);//Most used

h1.firstElementChild.style.color='white';
h1.lastElementChild.style.color='red';

//Going Upwards

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background= 'var(--gradient-secondary)';


// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if (el !== h1) el.style.transform= 'scale(0.5)';
});


//Building A tabbed Component 

//Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');

const tabContainer= document.querySelector('operations__tab-container');

const  tabContent= document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e){
  const clicked= e.target.closest('.operations__tab');
  console.log(clicked);

  //guards clause
  if(!clicked) return;

  //Active Tabs

  tabs.forEach(t=> t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add();
});

//Passing Arguments to Event Handlers.

//Menu Fade Animation

const handleHover= function(e,opacity){
  if (e.target.classList.contains('nav__link')){
    const link=e.target;
    const siblings = link.closest('.nav').querySelector('.nav__link');
    const logo= link.closest('.nav').querySelector('img');
  
    siblings.forEach(el =>{
      if(el !== link) el.style.opacity= opacity;
      })
      logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5);
});

nav.addEventListener('mouseout',function(e){
  handleHover(e,1);
});

//Using bind method to do the same thing
//nav.addEventListener('mouseover',handleHover.bind(0.5));
//nav.addEventListener('mouseover',handleHover.bind(1));


//Build A Sticky Navigation. 
//All the sticky navigation does is change to a fixed positon,as well as the
//background color to transparent

window.addEventListener('scroll',function(e){
 console.log(window.scrollY)
});

const initialCords = section1.getBoundingClientRect();

if(window.scrollY>initialCords.top)nav.classList.add('sticky')
else nav.classList.add('sticky');

//Intersection of server API

const obsCallback = function() {

}

const obsOptions={
  root: null,
  threshold:0.1
};

const observer= new IntersectionObserver(obsCallback,obsOptions);
observer.observe(section1);


//Revealing elements on scroll.

const allSections= document.querySelectorAll('.section');

const revealSection= function(entries, observer){
const [entry]= entries;
console.log(entry);

if (entry.isIntersecting) return;
entry.targer.classList.remove('section--hidden');
observer.unobserve(entry.target);
}

const sectionObserver= new IntersectionObserver(revealSection,{
root:nill,
threshold:0.15,
rootMargin: `-${navHeight}px`,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading images.

const imgTargets= document.querySelectorAll('img[data=src]');

const loadImg = function(entries, observer){
const [entry] = entries; 
console.log(entry);

if(entry.isIntersecting)return;
//replace src with data src
entry.target.src= entry.target.dataset.src;
entry.target.classList.remove('lazy-img');

entry.target.addEventListener('load',function () {

})
}

const imgObserver = new IntersectionObserver(loadIMG,{
  root: null,
  threshold: 0,
})

imgTargets.forEach(img=imgObserver.observe(img));

//Building a Slider Component(WATCH LATER).


//Efficient script loading.

//REGULAR way: <script src= "script.js">

//ASYNC way: <script async src= "script.js">

//DEFER way: <script defer scr= "script.js">


//Scripts loaded with ASYNCit 
/*Scripts are fetched asynchronouslt and executed immediately

Usually DOMContentLoaded event waits for ALL script to execute,except
for async scripts. So, DOMContentLoaded does not wait for an async script*/


 