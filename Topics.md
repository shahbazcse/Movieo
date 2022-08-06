## 1. ES6 Refresher

#### 1.1 Let vs Var vs Const
```
// var Keyword in JS

    function sayHello(){
      for(var i=0; i<5; i++){
        console.log(i);
      }
      console.log(i);
    }
    /*
    i cannot be accessed outside the function 
    in which it is defined.
    */
    // console.log(i); // error
    sayHello();

// let Keyword in JS

    function sayHello(){
      for(let i=0; i<5; i++){
        console.log(i);
      }
      /*
      i declared using let keyword can only be
      accessed inside the block it is declared in.
      It cannot be accessed outside the block.
      */
      // console.log(i); // error
    }
    /*
    i cannot be accessed outside the function 
    in which it is defined.
    */
    // console.log(i); // error
    sayHello();

// // const Keyword in JS

     const x=1;
    //  x=2; // error (a const variable cannot be reasssigned)
```
#### 1.2 Objects
```
    const person ={
      name: 'Shahbaz',
      walk: function(){}, // walk is a Method; A Function inside an Object is called a Method in OOPs.
      talk() {} // another clean syntax to define a Method (eg: walk() {})
    };

        // Accessing members of an Object:
        // #1 Using dot
        person.walk();
        person.name = 'Tony';

        // #2 Using bracket:
        const targetMember = 'name';
        person[targetMember.value] = 'John';
```
#### 1.3 this Keyword
```
    const person = {
      name: 'John',
      walk(){
        console.log(this);
      }
    }

    person.walk();

    const walk = person.walk;
    walk();
```
#### 1.4 Binding this
```
    const person = {
      name: 'John',
      walk(){
        console.log(this);
      }
    }

    person.walk();

    const walk = person.walk.bind(person);
    walk();
```
#### 1.5 Arrow Functions
```
// Arrow functions

    // > Normal function:
    const square = function(number){
      return number*number;
    }

    // > Arrow function:
    const square = number => {
      return number*number;
    }
    console.log(square(5));

// Usage of Arrow Functions

    // > Example:
    const job = [
      {id:1, isActive: true},
      {id:2, isActive: true},
      {id:3, isActive: false},
    ]

    const activeJobs = job.filter(job => job.isActive);
    console.log(activeJobs);
```
#### 1.6 Arrow Functions and this
```
    const person = {
      talk(){
        setTimeout(() => {
          console.log(this);
        },1000);
      }
    };

    person.talk();
```
#### 1.7 Array.map Method
```
    // > Example 1:
    const colors = ['red', 'green', 'blue'];
    const items = colors.map(color => `<li>${color}</li>`);
    console.log(items);

    // > Example 2:
    const persons = [
        {firstname : "Malcom", lastname: "Reynolds"},
        {firstname : "Kaylee", lastname: "Frye"},
        {firstname : "Jayne", lastname: "Cobb"}
      ];
    const getFullName = item => [item.firstname,item.lastname].join("");
    console.log(persons.map(getFullName));
```
#### 1.8 Object Destructuring
```
    // Example:
    const address = {
        street: 'Hammond Street',
        city: 'Berlin',
        country: 'Germany'
    }

    // // Default way of assigning
    // const street = address.street;
    // const city = address.city;
    // const country = address.country;

    // Object Destructuring (New way of assigning)
    const {street, city, country} = address;
    console.log(street);
    console.log(city);
    console.log(country);
        // for different variable name:
        const {street: st, city: ct, country: cy} = address;
        console.log(st);
        console.log(ct);
        console.log(cy);
```
#### 1.9 Spread Operator
```
const arr1 = [1,2,3];
const arr2 = [4,5,6];

    // // Using concat method:
    // const combined = arr1.concat(arr2);

    // Using Spread Operator:
    // const combined = [...arr1, ...arr2];
    // console.log(combined);

    // // Cloning an array:
    // const clone = [...arr1];
    // console.log(arr1);
    // console.log(clone);

    // Applying Spread Operator on Objects:
    const first = {name: 'Tony'};
    const second = {role: 'Ironman'};

    const combined = {...first, ...second, strength: 50};
    console.log(combined);

    // Cloning an Object:
    const clone = {...first};
    console.log(first);
    console.log(clone);
```
#### 1.10 Classes
```
const person1 = {
    name: 'John',
};

class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
};

const person = new Person('John');
console.log(person.name);
```
#### 1.11 Inheritance
```
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     walk(){
//         console.log("walk");
//     }
// };

// class Teacher extends Person{
//     constructor(name, degree){
//         super(name);
//         this.degree = degree;
//     }
//     teach(){
//         console.log("teach");
//     }
// };

// const teacher1 = new Teacher('Mary', 'M.Tech');
// console.log(teacher1.name);
// console.log(teacher1.degree);
```
#### 1.12 Modules

  1. Modules allow you to break up the code into separate file</br>
  2. Modules makes it easier to maintain the codebase.</br>
  3. JavaScript Modules rely on _import_ and _export_ statements</br>
  <img src="https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/04_import_graph.png" height="600" width="1000px" class="rounded">

#### 1.13 Named and Default Exports/Imports

##### Named and Default Exports
###### Named Exports
```
// In-Line Individually

  export const name = 'John';
  export const age = 40;
  
// At Bottom

  const name = 'John';
  const age = 40;
  export {name,age};

```
###### Default Exports
```
  export default class Teacher extends Person{
    Constructor(name,degree){
      super(name);
      this.degree = degree;
    }
    teach(){
      console.log("Teach");
    }
  };
  
```
##### Named and Default Imports
###### Named Imports
```
  import {name,age} from "./person.js";
```
###### Default Imports
```
  import message from "./message.js";
```

## 2. Components

#### 2.1 Specifying Children
#### 2.2 Embedded Expressions
#### 2.3 Setting Attributes
#### 2.4 Rendering Classes Dynamically
#### 2.5 Rendering Lists
#### 2.6 Conditional Rendering
#### 2.7 Handling Events
#### 2.8 Binding Event Handlers
#### 2.9 Updating the State
#### 2.10 Change of State
#### 2.11 Passing Event Arguments

## 3. Composing Components

#### 3.1
#### 3.2
#### 3.3
#### 3.4
#### 3.5
#### 3.6
#### 3.7
#### 3.8
#### 3.9
#### 3.10
