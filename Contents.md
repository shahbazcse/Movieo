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
  <p align="center">
    <img src="https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/04_import_graph.png" height="600" width="1000px">
  </p>

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
```
import React, { Component } from "react";

class Counter extends Component {
    render(){
        return (
            <div> // Parent
                <h1>Hello World</h1> // Children
                <button>Increment</button> // Children
            </div>
        )
    }
}
```
#### 2.2 Embedded Expressions
```
import React, { Component } from "react";

class Counter extends Component {
    // state includes any data that this component needs
    state = {
        count : 0
     }; 

    render(){
        return (
            <div>
                <span>{this.state.count}</span> // Embedded Expression
                <span>{this.formatCount()}</span> // Embedded Expression
                <button>Increment</button>
            </div>
        )
    }
    formatCount(){
        const {count} = this.state; // Object Destructuring
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.3 Setting Attributes
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0,
        imageUrl: 'https://picsum.photos/200'
    };
    
    styles = {
        fontSize : 10,
        fontWeight : 'bold'
    }

    render(){
        return (
            <div>
                <img style={this.styles} src={this.state.imageUrl} alt=""></img> // Setting Attributes using src and style
                <span className="badge badge-primary m-2">{this.formatCount()}</span> // Setting Attributes using className
                <button className="btn btn-secondary btn-sm">Increment</button> // Setting Attributes using className
            </div>
        )
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.4 Rendering Classes Dynamically
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0,
    };

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
    }

    // Rendering Classes Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.5 Rendering Lists
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0,
        tags : ['tag1', 'tag2', 'tag3']
    };

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} // Rendering Lists using Array.map Method
                </ul>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.6 Conditional Rendering
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0,
        tags : ['tag1', 'tag2', 'tag3']
    };

    // Conditional Rendering
    renderTags(){
        if(this.state.tag.length === 0)
            return <p>There are no tags</p>;
        else
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render(){
        return (
            <div>
                /* If first expression is true and second expression is also true (non-zero string are truthy), 
                    the last operand is returned */
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </div>
        )
    }
}
```
#### 2.7 Handling Events
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0
    };

    // Handling Event
    handleIncrement(){
        console.log("Increment Clicked");
    }

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} // Passing 'handleIncrement' reference inside 'onClick' event handler
                        className="btn btn-secondary btn-sm">
                            Increment
                </button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.8 Binding Event Handlers
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0
    };

    // Binding Event Handler using bind Method
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this); // Binds 'this' to handleIncrement using Constructor to avoid undefined 'this' error
        console.log("Constructor");
    }

    handleIncrement(){
        console.log("Increment Clicked", this);
    }

    // Alternatively using Arrow Function to inherit 'this' directly
    handleIncrement = () => {
        console.log("Increment Clicked", this);
    }

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.9 Updating the State
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0
    };

    handleIncrement(){
        this.setState({count: this.state.count + 1}); // using 'setState' to update state
    }

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```
#### 2.10 Change of State

1. When using setState, the state changes.
2. React puts the old VDOM and modified VDOM side by side and compare them.
3. Here, only span is modified as we are using formatCount() in it.
4. After analysing, React will update only the modified part of the VDOM with the Real DOM.
5. Except the span, no where else in Real DOM is changed.
<p align="center">
    <img src="https://miro.medium.com/max/1838/1*eDpgmIW3vBGj6m64GGlFVw.gif" height="850px" width="850px">
</p>

#### 2.11 Passing Event Arguments
```
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count : 0
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1}); // using 'setState' to update state
    };

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                /* To pass arguments through 'handleIncrement()', pass arrow function inside 
                    the 'onClick' event handler and pass the argument */
                <button onClick={() => this.handleIncrement(product)}
                        className="btn btn-secondary btn-sm">Increment
                </button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```

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
