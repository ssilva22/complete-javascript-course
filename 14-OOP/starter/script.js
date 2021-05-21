'use strict';

//What is OOP?
//Programming paradigm based on the concept of objects

//Abstraction: Ignoring or hiding details that don't matter, allowing us to get an
//perspective of the thing we're implementing, instead of messing with details
//that don't really matter to our implementation.

//Encapsulation:Keeping properties and methods private inside the class,so they 
//are not accessible fro outside the class.Some methods can be exposed as a public
//API.

//Polymorphism.A child class can overwrite a method it inherited from a parent class.

//OOP In JavaScript:Prototypes

//Objects are linked to a prototype object
//Prototypal inheritance:The prototype contains methods that are accessible to all
//objects linked to that prototype.

//Constructor Functions
/*Technique to create objects from a function*/
//ES6 Classes
/*Modern alternative to constructor function syntax
"Syntactic sugar":behind the scenes. ES6 functions work exactly like constructor functions/ */
//Object.create()
//Easiest and most straigtforward way.

//All constructor functions start with a capital letter

const Person= function(firstName,birthYear){
this.name= firstName;
this.birthYear= birthYear;
console.log(this);

}

new Person('Jonas',1991);

//Prototypes

Person.prototype.calcAge= function() {
    console.log(2037- this.birthYear);
}
jonas.calcAge();

//Unique property allows you to get the unique values of an array
Array.prototype.unique= function () {
    return [...new Set(this)];
}

const h1 = document.querySelector('h1');

//class expression
const PersonCl= class{};

//Class declaration
class PersonCL{
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }

    calcAge() {
        console.log(2037-this.birthYear);
    }
}

const jessica= new PersonCl('Jessica',1996);
console.log(jessica);
jessica.calcAge();

//1. Classes are not hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode.

//Getters and Setters
//Every object has a getter and setter method
//Getters and setters are functions that get and set methods.

const account ={
    owner: 'Jonas',
    movements: [200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest= 50;
console.log(account,movements);

class CarCl{
    constructor(make,speed){
        this.make= make;
        this.speed=speed;
    }

accelerate(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

get speedUS(){
    return this.speed/ 1.6;
}
}


const ford= new CarCl('Ford',120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//Class Inheritance

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge =  function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course){
   Person.call(this.firstName, this.birthYear);
    this.course=course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike =  new Student ('Mike' , 2020 , 'Computer Science');
console.log(mike);
mike.introduce();

//Coding Challenge

const Car= function (make, speed) {
    this.make = make;
    this.speed =  speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`this ${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

cosnt EV =  function(make, speed, charge) {
    Car.call(this,make, speed)
    this.speed =  speed;
}
//  Link Prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
this.charge =  chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h,
        with a charge of ${this.charge}`
    );
};

const tesla = new EV('Tesla', 120 , 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();

//ES6 Classes

//Static Method
static hey (){
    console.log('Hey there');
}

class StudentCl extends PersonCL {
    constructor(fullName,birthYear,course) {
        //Super call method always needs to be used first in ES6 before
        //using the this keyword
        super (fullName, birthYear);
        this.course=course;
    };
};

const martha = new StudentCl('Martha Jones', 2012);

//Another Class Example

class Account {
    constructor(owner,currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin= pin;
        this._movements = [];
        this.locale=navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val) {
        this._movements.push(val)
    }

    withdraw(val){
        this.deposit(-val);
    }

    approveLoan(){
     return true;   
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
        }
        console.log(`Loan Approved`);
    }
}

const acc1 =  new Account ('Jonas', 'EUR', 1111);
console.log(acc1);

acc1._movements.push(250);
acc1.deposit(250);
acc1.withdraw(150);
console.log(acc1,_pin);
acc1.approveLoan(1000);

//Encapsulation: Protected properties and methods

locale=navigator.language;

//Private Fields
//#movements= []; //Need to change every movements variable to #movements




