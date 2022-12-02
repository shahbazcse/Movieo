# React Concepts Covered:

1. ES6 Refresher:

    1.1 Let vs Var vs Const  
    1.2 Objects  
    1.3 this Keyword  
    1.4 Binding this  
    1.5 Arrow Functions  
    1.6 Arrow Functions and this  
    1.7 Array.map Method  
    1.8 Object Destructuring  
    1.9 Spread Operator  
    1.10 Classes  
    1.11 Inheritance  
    1.12 Modules  
    1.13 Named and Default Exports  

2. Components:

    2.1 Specifying Children  
    2.2 Embedded Expressions  
    2.3 Setting Attributes  
    2.4 Rendering Classes Dynamically  
    2.5 Rendering Lists  
    2.6 Conditional Rendering  
    2.7 Handling Events  
    2.8 Binding Event Handlers  
    2.9 Updating the State  
    2.10 Change of State  
    2.11 Passing Event Arguments  

3. Composing Components:

    3.1 Composing Components  
    3.2 Passing Data to Components  
    3.3 Passing Children  
    3.4 Debugging React Apps  
    3.5 Props vs State  
    3.6 Raising and Handling Events  
    3.7 Updating the State  
    3.8 Single Source of Truth  
    3.9 Removing the Local State  
    3.10 Multiple Components in Sync  
    3.11 Lifting the State Up  
    3.12 Stateless Functional Components  
    3.13 Destructuring Arguments  
    3.14 Lifecycle Hooks  
    3.15 Mounting Phase  
    3.16 Updating Phase  
    3.17 Unmounting Phase  

4. Pagination, Filtering, and Sorting:

    4.1 Pagination - Component Interface  
    4.2 Pagination - Displaying Pages  
    4.3 Pagination - Handling Page Changes  
    4.4 Pagination - Paginating Data  
    4.5 Pagination - Type Checking with PropTypes  
    4.6 Filtering - Component Interface  
    4.7 Filtering - Displaying Items  
    4.8 Filtering - Default Props  
    4.9 Filtering - Handling Selection  
    4.10 Filtering - Implementing Filtering  
    4.11 Filtering - Adding All Genres  
    4.12 Sorting - Extracting MoviesTable  
    4.13 Sorting - Raising the Sort Event  
    4.14 Sorting - Implementing Sorting  
    4.15 Sorting - Moving Responsibility  
    4.16 Sorting - Extracting TableHeader  
    4.17 Sorting - Extracting TableBody  
    4.18 Sorting - Rendering Cell Content  
    4.19 Sorting - Unique Keys  
    4.20 Sorting - Adding the Sort icons  
    4.21 Sorting - Extracting Table  
    4.22 Sorting - Extracting a Method  
    4.23 Destructuring Arguments  

5. Routing:

    5.1 Adding React Router  
    5.2 Adding Routes  
    5.3 Adding the NavBar  
    5.4 Linking to the MovieForm  

6. Forms:

    6.1 Introduction  
    6.2 Building a Bootstrap Form  
    6.3 Handling Form Submission  
    6.4 Refs  
    6.5 Controlled Elements  
    6.6 Handling Multiple Inputs  
    6.7 Common Errors  
    6.8 Extracting a Reusable Input  
    6.9 Validation  
    6.10 Basic Validation Implementation  
    6.11 Displaying Validation Errors  
    6.12 Validation on Change  
    6.13 Exploring Joi  
    6.14 Validating a Form using Joi  
    6.15 Validating a Field using Joi  
    6.16 Disabling the Submit Button  
    6.17 Extracting a Reusable Form  
    6.18 Extracting Helper Rendering Methods  

7. Calling Backend Services:

    7.1 JSON Placeholder  
    7.2 HTTP Clients  
    7.3 Getting Data  
    7.4 Creating Data  
    7.5 Lifecycle of a request  
    7.6 Updating Data  
    7.7 Deleting Data  
    7.8 Optimistic vs Pessimistic Updates  
    7.9 Expected vs Unexpected Errors  
    7.10 Handling Unexpected Errors Globally  
    7.11 Extracting a Reusable HTTP Service  
    7.12 Extracting a Config Module  
    7.13 Displaying Toast Notification  
    7.14 Logging Errors  
    7.15 Extracting a Logger Service  
    7.16 Installing MongoDB on Linux  
    7.17 Setting Up the Node Backend and Postman App  
    7.18 Adding HTTP and Log Services  
    7.19 Getting data from database  
    7.20 Extracting a Config File  
    7.21 Populating Movie Form  
    7.22 Saving the Movie  

8. Authentication and Authorization:

    8.1 Registering a New User  
    8.2 Submitting the Registration Form  
    8.3 Handling Registration Errors  
    8.4 Logging in a User  
    8.5 Submitting the Login Form  
    8.6 Handling Login Errors  
    8.7 Storing the JWT  
    8.8 Logging in the User upon Registration  
    8.9 JSON Web Tokens (JWT)  
    8.10 Getting the Current User  
    8.11 Displaying Current User on NavBar  
    8.12 Logging out a User  
    8.13 Calling Protected API Endpoints  
    8.14 Fixing Bi-directional Dependencies  
    8.15 Authorization  
    8.16 Showing/Hiding Elements based on the User  
    8.17 Protecting Routes  
    8.18 Extracting ProtectedRoute  
    8.19 Redirecting after Login  
    8.20 Hiding the Delete Column  
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

    handleIncrement = () => {
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
#### 2.10 What Happens When State Changes

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
## 3. Composing Components:

#### 3.1 Composing Components  
```
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counters => <Counter key={counter.id}/>)} // composing counter component
            </div>
        );
    }
}

export default Counters;
```
#### 3.2 Passing Data to Components  
```
// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} // Passing data to components
                             value={counter.value} // Passing data to components
                             selected={true} // Passing data to components
                    />)}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
            state = {
                value: this.props.value // 'props' are used to pass data from a parent component(Counters) to a child component(Counter)
            };

        handleIncrement = () => {
            this.setState({count:this.state.value + 1});
        };
        render(){...}
    }
    export deafult Counter;
```
#### 3.3 Passing Children  
```
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id}
                             value={counter.value}
                             id={counter.id}
                    >
                    <h4>Counter #{counter.id}</h4> // Children Component
                    </Counter>
                    ))}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
            state = {
                value: this.props.value
            };

        handleIncrement = () => {
            this.setState({count:this.state.value + 1});
        };
        render(){
            return(
                <div>
                    <h4>{this.props.id}</h4> // Passing children component
                </div>
            )
        }
    }
    export deafult Counter;
```
#### 3.4 Debugging React Apps  
React Developer Tools Extension for Chrome and Firefox  
Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en  
Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/  

#### 3.5 Props vs State  
##### Props: 
1. Props are used to pass data from one component to another.
2. Attributes (i.e. key, value, id) are the part of props, input to the components.  
            ```
            <Counter key={counter.id} value={counter.value} id={counter.id}>
            ```
3. When a components does not have any state, it may get the data that it needs via props.
4. Props is read-only, we cannot change the input inside the children component.
5. Props can be used with state and functional components.
##### State:
1. State is used to pass data within the component only.
2. State is a local storage that is local to the component only and cannot be passed to other components.
3. State can be used only with the state components/class components.
4. State is both read and write.
5. setState method is used to update the state values in the component.

#### 3.6 Raising and Handling Events  
***The component that owns a piece of the state, should be the one modifying it.***
<p align="center">
    <img src="https://user-images.githubusercontent.com/89023719/185809690-bdad926e-05f7-485c-9c7f-66ff7b531d80.png" height="500px" width="900px">  
</p>

```
// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };
    
    // Event Handler
    handleDelete = () => {
        console.log("handleDelete Called");
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id}
                             value={counter.value}
                             id={counter.id}
                             onDelete={this.handleDelete} // props 'onDelete' included having the same name as raised event in child component
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
            state = {
                value: this.props.value
            };

        handleIncrement = () => {
            this.setState({count:this.state.value + 1});
        };
        render(){
            return(
                <div>
                    <button onClick={this.props.onDelete}>Delete</button> // 'onDelete' event passed using props
                </div>
            )
        }
    }
    export deafult Counter;
```
#### 3.7 Updating the State  
```
// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };
    
    // Event Handler
    handleDelete = (counterId) => { // 'counterId' will specify which counter to remove
        let counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters}); // updating the state
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={this.handleDelete}
                             counter={counter} // passing the counter object itself
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
            state = {
                value: this.props.counter.value
            };

        handleIncrement = () => {
            this.setState({count:this.state.value + 1});
        };
        render(){
            return(
                <div>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button> // Passing counter component with unique id
                </div>
            )
        }
    }
    export deafult Counter;
```
#### 3.8 Single Source of Truth  
***Single source of truth is one master state for most if not all of the application, it send that state down as props to all the child components.***  
<p align="center">
    <img src="https://user-images.githubusercontent.com/89023719/185809209-4a022bca-e8ff-42f8-a2ff-333575e2d1ad.png" height="500px" width="900px">  
</p>

```
// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };
    
    // Event Handler
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    // Resetting Values of Components
        // The local state of the counter component will not be updated.
        // To update the component, we need to remove the local state and have a single source of truth.
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }
    render() {
        return (
            <div>
                // Reset button invoking handleReset
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={this.handleDelete}
                             counter={counter}
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
            state = {
                value: this.props.counter.value
            };

        handleIncrement = () => {
            this.setState({count:this.state.value + 1});
        };
        render(){
            return(
                <div>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            )
        }
    }
    export deafult Counter;
```
#### 3.9 Removing the Local State  
<p align="center">
    <img src="https://user-images.githubusercontent.com/89023719/185809408-ceb2c223-4043-45d3-ad5c-c84c07a06aca.png" height="500px" width="900px">  
</p>

```
// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    handleIncrement = counter => {
        const counters = {...this.state.counters};
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    
    // Event Handler
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    // Reseting Values of Components
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }
    render() {
        return (
            <div>
                // Reset button invoking handleReset
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={this.handleDelete}
                             onIncrement={this.handleIncrement}
                             counter={counter}
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;

// In counter.js
    class Counter extends Components {
    // Local State is removed from the child component and the event handlers are moved to the parent component which can be called in child component via props.
        render(){
            return(
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            )
        }
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classe += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" ? value;
    }
    export deafult Counter;
```
#### 3.10 Multiple Components in Sync  
1. Earlier we passed the state of the 'counters' component to 'counter' component via props, it could be achieved because of the parent-child relationship between the 'counters' and 'counter' components.

2. If we add a 'NavBar' component, there will not be any relationship between the 'counters' and the 'NavBar' component.

3. In such situations, where there is no parent-child relationship between two components and we want to keep them in sync and share data between them, we lift the state up to a master component above these two components in question.

4. Hence, both the child components now have a same parent, and we can pass the state to all the child components via props.
<p align="center">
    <img src="https://user-images.githubusercontent.com/89023719/185809479-ec39e131-f7f4-4362-9466-8f500d7c7c02.png" height="500px" width="850px">  
</p>

#### 3.11 Lifting the State Up  
```
// In App.js
class App extends Component {
    // Moving the state and event handlers in parent component to lift the state up.
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    handleIncrement = counter => {
        const counters = {...this.state.counters};
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    
    // Event Handler
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    // Reseting Values of Components
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }
    render() {
        return (
            <React.Fragment>
                <NavBar 
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;

// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div>
                // event handlers invoked via props
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={this.props.onDelete}
                             onIncrement={this.props.onIncrement}
                             counter={counter}
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;
```
#### 3.12 Stateless Functional Components  
Stateless Functional Components can be created:
1. In a component, when we only have a single render method.
2. Also, when we don't have any state as we are getting the data using props.
3. In such situations, we can convert the component into a Stateless Functional Component.
4. So instead of using a class to define the component, we can use a function to define the component.
```
// In navbar.js
    // Stateless Functional Component
    const NavBar = (props) => { // props object will passed as an argument to this function in runtime.
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <span className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    };

export default NavBar;
```
#### 3.13 Destructuring Arguments  
```
// In navbar.js
    // Stateless Functional Component
    const NavBar = ({totalCounters}) => {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters} // Destructuring Arguments
                    </span>
                </a>
            </nav>
        );
    };

export default NavBar;

// In counters.js
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    const {onReset, onDelete, onIncrement, counters} = this.props; // Destructuring Arguments
    render() {
        return (
            <div>
                // event handlers invoked via props
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={onDelete}
                             onIncrement={onIncrement}
                             counter={counter}
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;
```
#### 3.14 Lifecycle Hooks  
***A. When writing React components, we need access to lifecycle events to handle a variety of side effects:***  
1. Like fetching data on mount.  
2. Changing props when the component updates.  
3. Cleaning up before the component unmounts, etc.  

***B. Lifecycle Hooks can only be used in class components. It cannot be used in functional components.***  

***C. Each React component has a life cycle, which consists of three phases:***  
1. Mounting Phase: The mounting phase is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render”.
2. Updating Phase: The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.
3. Unmounting Phase: The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.  
<p align="center">
    <img src="https://user-images.githubusercontent.com/89023719/185810127-3e93c384-4706-4de4-86d6-49c9a566815c.png" height="500px" width="850px">  
</p>

#### 3.15 Mounting Phase  
```
// In App.js
class App extends Component {
    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    <!-- 
    1. 'constructor' method is called only once when an instance of the class is created.
    2. It can be used to intialize the property in that instance. 
    -->
    constructor(){
        super(); // calling constructor of the parent class
        console.log("App - Constructor");
    }

    <!-- 
    1. 'componentDidMount' method is called after the component is rendered to the DOM.
    2. It is used to make AJAX calls to get data from the server. 
    -->
    componentDidMount(){
        console.log("App - Mounted");
    }

    handleIncrement = counter => {...
    }
    
    handleDelete = (counterId) => {...
    };

    handleReset = () => {...
    };

    <!-- 
    1. 'render' method returns a react element that respresents the virtual DOM.
    2. And then react gets that virtual DOM and renders it in the Real DOM.
    3. When a component is rendered, all its children components are also rendered recursively.
    -->
    render() {
        console.log("App - Rendered")
        return (
            <React.Fragment>
                <NavBar 
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;
```
**Console:**  
```
// Lifecycle Hooks will be called in the same order
App - Constructor
App - Rendered
    NavBar - Rendered
    Counters - Rendered
        Counter - Rendered (x4 counter component)
App - Mounted
```
#### 3.16 Updating Phase  
```
// In counter.js
    class Counter extends Components {
        <!--
        1. 'componentDidUpdate' method is called after a component is updated.
        2. As we have a updated state/props, we can compare the updated state/props with the old state/props.
        3. If there is a change in the state/props of the component, we can make an AJAX request to the server to get the new data.
         -->
        componentDidUpdate(prevProps, prevState){
            // We can make an AJAX call if the value of prevState/prevProps is different from the new value of state/props.
            if(prevProps.counter.value !== this.props.counter.value){
                // AJAX call and get new data from the server
            }
        }
        render(){
            return(
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            )
        }
    }

    getBadgeClasses(){...
    }

    formatCount(){...
    }

    export deafult Counter;
```
#### 3.17 Unmounting Phase  
```
// In counter.js
    class Counter extends Components {
        componentDidUpdate(prevProps, prevState){
            if(prevProps.counter.value !== this.props.counter.value){
                // AJAX call and get new data from the server
            }
        }

        <!-- 
        1. 'componentWillUnmount' method is called just before a component is removed from the DOM.
        2. It gives us an opportunity to do any kind of clean-ups before the component is removed from the DOM.
        3. It helps in preventing memory leaks.
        -->
        componentWillUnmount(){
            console.log("Counter - Unmount");
        }

        render(){
            return(
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            )
        }
    }

    getBadgeClasses(){...
    }

    formatCount(){...
    }
    
    export deafult Counter;
```
## 4. Pagination, Filtering, and Sorting:

#### 4.1 Pagination - Component Interface  
```
// In pagination.jsx
const Pagination = props => {
    return null;
};

export default Pagination;

// In movies.jsx
render(){
    // Adding interface for the pagination component
<Pagination
    itemsCount={count}
    pageSize={this.state.pageSize}
    onPageChange={this.handlePageChange}
/>
}
```
#### 4.2 Pagination - Displaying Pages  
1. Used bootstrap for creating pagination: https://getbootstrap.com/docs/4.0/components/pagination/  
2. Lodash has several built-in utility functions that make coding in JavaScript easier and cleaner. Install lodash from npm.
3. Math.ceil()  function always rounds up and returns the smaller integer greater than or equal to a given number.  
4. Lodash `_.range()` method is used to create an array of numbers progressing from the given start value up to, but not including the end value.  
```
// In pagination.jsx
import _ from "lodash";

const Pagination = props => {
    // Object destructuring used for props
    const {itemsCount, pageSize} = props;
    
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1);
    
  return (
    // Displaying Pages
    <nav>
      <ul className="pagination">
        {pages.map(page => 
            <li 
                key={page}
                className="page-item"
            >
            <a className="page-link"
            >
            {page}
            </a>
            </li>
        )}
      </ul>
    </nav>
  );
};
```
#### 4.3 Pagination - Handling Page Changes  
```
// In pagination.jsx

const Pagination = props => {
    const {itemsCount, pageSize} = props;
    
    // Handling Page Changes
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1);
    
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => 
            <li 
                key={page}
                className={page === currentPage ? "page-item active" : "page-item"}
            >
            <a className="page-link"
                onClick={() => onPageChange(page)}
            >
            {page}
            </a>
            </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;

// In movies.jsx

render(){
// Object destructuring for 'this.state'
const {pageSize, currentPage} = this.state;
<Pagination
    // Handling Page Changes
    itemsCount={count}
    pageSize={pageSize}
    currentPage={currentPage}
    onPageChange={this.handlePageChange}
/>
}
```
#### 4.4 Pagination - Paginating Data  
```
// In paginate.js
import _ from "lodash";

// Paginating Data
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) // this will convert the items to a lodash object
    .slice(startIndex)
    .take(pageSize)
    .value(); // this will convert the lodash object back to a regular array
}

// In movies.jsx
import { paginate } from '../utils/paginate';

render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    // Paginating Data
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            ...
          </div>
          <div className="col">
            <p>Showing {totalCount} movies in the database.</p>
             {movies.map(movie => {
                ...
             )}
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
#### 4.5 Pagination - Type Checking with PropTypes  
1. Install prop-types from npm  
2. You can use prop-types to document and check the intended types of props passed to components, and warn in development if they don’t match.  
```
// In pagination.jsx
import PropTypes from 'prop-types';

const Pagination = props => {
    const {itemsCount, pageSize} = props;
    ...
    ...
};

// Type Checking with PropTypes
    // isRequired makes sure the prop is passed to the Pagination component
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;
```
#### 4.6 Filtering - Component Interface  
```
// In movies.jsx

import ListGroup from '';
import getGenres from '';

class Movies extends Component {
  state = {
    movies: [], // it will take sometime to get data, so we use empty array to avoid runtime undefined error
    genres: [], //
    currentPage: 1,
    pageSize: 4
  };

// componentDidMount will be called when an instance of this method is rendered in the DOM
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
...
...
  render() {
    ...
    ...
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            // Adding Component Interface
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            ...
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```
#### 4.7 Filtering - Displaying Items  
Used bootstrap for creating ListGroup: https://react-bootstrap.github.io/components/list-group/  
```
const ListGroup = (props) => {
    { items, textProperty, valueProperty } = props;
    
    // Displaying Items
    return (
        <ul className="list-group">
            {items.map(item => (
              <li
                key={item[valueProperty]}
                style={{cursor: "pointer"}}
                className="list-group-item"
              >
                {item[textProperty]}
              </li>                
            ))}
        </ul>
    );
};
 
export default ListGroup;
```
#### 4.8 Filtering - Default Props  
```
// In listGroup.jsx

const ListGroup = (props) => {
    { items, textProperty, valueProperty } = props;
    
    // Displaying Items
    return (
        <ul className="list-group">
            {items.map(item => (
              <li
                key={item[valueProperty]}
                style={{cursor: "pointer"}}
                className="list-group-item"
              >
                {item[textProperty]}
              </li>                
            ))}
        </ul>
    );
};

// Default Props are used to avoid passing the props the traditional way so that it can be modified as per requirement of the new component with new default value

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"       
};
 
export default ListGroup;
```
#### 4.9 Filtering - Handling Selection  
```
// In listGroup.jsx

const ListGroup = (props) => {
    { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(item => (
              <li
                onClick={() => onItemSelect(item)} // Handling Selection
                key={item[valueProperty]}
                style={{cursor: "pointer"}}
                className={item === selectedItem ? "list-group-item  active" : "list-group-item"} // Setting class dynamically when rendering the list
              >
                {item[textProperty]}
              </li>                
            ))}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"       
};
 
export default ListGroup;

// In movies.jsx

class Movies extends Component {
...
...
  render() {
    ...
    ...
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre} // Handling Selection
              onItemSelect={this.handleGenreSelect} // Handling Selection
            />
          </div>
          <div className="col">
            ...
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```
#### 4.10 Filtering - Implementing Filtering  
```
// In movies.jsx

class Movies extends Component {
...
...
  render() {
    const { length: count } = this.state.movies;
    const {
        pageSize,
        currentPage,
        selectedGenre,
        movies: allMovies
    } = this.states;
    
    if(count === 0) return <p>There are no movies in the database.</p>;
    
    // Implementing Filtering
    const filtered = selectedGenre 
    ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
    : allMovies;
    
    const movies = paginate(filtered, currentPage, pageSize);
    
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            // Adding Component Interface
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <p>Showing {filtered.length} movies in the database.</p>
          <div className="col">
            <Pagination
                itemsCount={filtered.length} // Implementing Filtering
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```
#### 4.11 Filtering - Adding All Genres  
```
// In movies.jsx

import ListGroup from '';
import getGenres from '';

class Movies extends Component {
  state = {
    movies: [], // it will take sometime to get data, so we use empty array to avoid runtime undefined error
    genres: [], //
    currentPage: 1,
    pageSize: 4
  };

// componentDidMount will be called when an instance of this method is rendered in the DOM
  componentDidMount() {
    // In a new array 'genres', Adding 'All Genres' as an object in the beginning and then adding rest of the genres using spread operator
  const genres = [{ name: "All Genres"}, ...getGenres()];
    this.setState({ movies: getMovies(), genres }); // when key: value (genres: genres) are same, we declare only one to avoid repetitions
  }
...
handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 }); // We should refresh the current page to 1 after every setState to avoid genre data overwrite on each other
}
  render() {
  
    // Implementing Filtering by checking both 'selectedGenre' and 'selectedGenre._id' to avoid blank 'All Genres' page
    const filtered = selectedGenre && selectedGenre._id
    ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
    : allMovies;
    ...
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            ...
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```
#### 4.12 Sorting - Extracting MoviesTable  
Table will be extracted from 'movies.jsx' and will be created as a separate file 'moviesTable.jsx'. Then 'moviesTable.jsx' will be imported inside the 'movies.jsx'.
```
// In moviesTable.jsx
import Like from ""; // Like component will be imported before we use it in the table body

const MoviesTable = props => {
    const { movies, onDelete, onLike } = props; // 'onDelete' and 'onLike' raise events will be used for onClick events in table body
    
    return(
        <table>
            <tr>
                ...
                ...
            </tr>
            <tbody>
                {movies.map((movie) => {
                    ...
                    ...
                })}
                <Like
                    liked={movie.liked}
                    onClick{() => onLike(movie)}
                />
                <button
                    onClick{() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </tbody>
        </table>
    )
}

// In movies.jsx
import MoviesTable from "";

render() {
    ...
    ...
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            // Here we have raised events props invoking event handlers
            <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
            />
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
#### 4.13 Sorting - Raising the Sort Event  
```
// In moviesTable.jsx
import Like from "";

const MoviesTable = props => {
    const { movies, onDelete, onLike, onSort } = props;
    
    return(
        <table>
            <tr>
                // Raising the Sort Event
                <th onClick={() => onSort('title')}>Title</th>
                <th onClick={() => onSort('genre.name')}>Genre</th>
                <th onClick={() => onSort('numberInStock')}>Stock</th>
                <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
                ...
            </tr>
            <tbody>
                {movies.map((movie) => {
                    ...
                    ...
                })}
                <Like
                    liked={movie.liked}
                    onClick{() => onLike(movie)}
                />
                <button
                    onClick{() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </tbody>
        </table>
    )
}

// In movies.jsx
import MoviesTable from "";

render() {
    ...
    ...
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort} // onSort props will raise event handler
            />
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
#### 4.14 Sorting - Implementing Sorting  
```
// In movies.jsx

import MoviesTable from "";

  // Implementing Sorting
  handleSort = (path) => {
    const sortColumn = {...this.state.sortColumn};
    if(sortColumn.path == path)
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc';
    else{
        sortColumn.path = path;
        sortColumn.order = 'asc';
    }
    this.setState({ sortColumn });
  };

render() {
    ...
    ...
    // _.orderBy() method is used for sorting by specifying the sort orders, i.e. asc or desc.
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    
    const movies = paginate(sorted, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
            />
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
#### 4.15 Sorting - Moving Responsibility  
We will move the sorting logic to the MoviesTable component from the movies.jsx for reusability of the MoviesTable component with the sorting logic.
```
// In moviesTable.jsx

import Like from "";

class MoviesTable extends Component {
    // Sorting logic moved from movies.jsx to this component under raiseSort event
    raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

    render(){
    const { movies, onDelete, onLike, onSort } = props;
    
    return(
        <table>
            <tr>
                // Invoking raiseSort event
                <th onClick={() => this.raiseSort('title')}>Title</th>
                <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                ...
            </tr>
            <tbody>
                {movies.map((movie) => {
                    ...
                    ...
                })}
                <Like
                    liked={movie.liked}
                    onClick{() => onLike(movie)}
                />
                <button
                    onClick{() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </tbody>
        </table>
    )
    }
}

// In movies.jsx

import MoviesTable from "";

  // hanldeSort will now take 'sortColumn' object from the MoviesTable onclick() event
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

render() {
    ...
    ...
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    
    const movies = paginate(sorted, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <MoviesTable
                movies={movies}
                sortColumn={sortColumn} // sortColumn props added
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
            />
            ...
          </div>
        </div>
      </React.Fragment>
    );
  }
}
```
#### 4.16 Sorting - Extracting TableHeader  
We will extract the table header from movies.jsx and move it to a new tableHeader.jsx component to improve reusability in future if we make a different table, i.e. Customer record, Product list, etc
```
// In tableHeader.jsx

import React, { Component } from "react";

class TableHeader extends Component {
  // Sorting logic moves to the table header for reusability in future in case we make a new table
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          // Rendering the elements dynamically using
          {this.props.columns.map((column) => (
            <th
                className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

// In moviesTable.jsx

import Like from "";
import TableHeader from "";

class MoviesTable extends Component {
    
    columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: "like" }, // For rendering we use empty object except a key for Like button as it won't need sorting
    { key: "delete" } // For rendering we use empty object a key for Delete button as it won't need sorting
  ];

    render(){
    const { movies, onDelete, onLike, onSort, sortColumn } = props;
    
    return(
        <table>
            <TableHeader
                    // Adding props
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <tbody>
                {movies.map((movie) => {
                    ...
                    ...
                })}
                <Like
                    liked={movie.liked}
                    onClick{() => onLike(movie)}
                />
                <button
                    onClick{() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </tbody>
        </table>
    )
    }
}
```
#### 4.17 Sorting - Extracting TableBody  
We will extract the table body from movies.jsx and move it to a new tableBody.jsx component to improve abstraction.
```
// In tableBody.jsx

class TableBody extends Component {

    render() {

        const {data, columns} = this.props;

        return (
            <tbody>
                // Rendering the elements dynamically based on number of items in data
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => <td></td>)}
                    </tr>
                ))}
            </tbody>
        );
    }
}
 
export default TableBody; 

// In moviesTable.jsx

import TableBody from "";

class MoviesTable extends Component {
    ...
    ...
    render(){
    const { movies, onDelete, onLike, onSort, sortColumn } = props;
    
    return(
        <table>
            <TableHeader
                    // Adding props
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            // Adding TableBody component interface and passing movies as 'data' props
            <TableBody
                column={this.columns} // Adding column props
                data={movies}
            />
        </table>
    )
    }
}
```
#### 4.18 Sorting - Rendering Cell Content  
Lodash `_.get()` method is used to get the value at path of object.  
```
// In tableBody.jsx
import _ from 'lodash';

class TableBody extends Component {
    // Rendering Cell Content
    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    };

    render() {

        const {data, columns} = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => (<td>{this.renderCell(item, column)}</td>))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

// In moviesTable.jsx

import TableBody from "";

class MoviesTable extends Component {
    columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like',
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>   
    }, // 'content' is a function that returns a JSX expression <Like> for each 'movie' parameter
    { key: 'delete',
      content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button> 
    } // 'content' is a function that returns a JSX expression <button> for each 'movie' parameter
  ];
  
    render(){
    const { movies, onDelete, onLike, onSort, sortColumn } = props;
    
    return(
        <table>
            <TableHeader
                    // Adding props
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                columns={this.columns} 
                data={movies}
            />
        </table>
    )
    }
}
```
#### 4.19 Sorting - Unique Keys  
```
class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    };
    // Creating unique keys for distinct items in each column
    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }

    render() {

        const {data, columns} = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => (<td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>))}
                    </tr>
                ))}
            </tbody>
        );
    }
}
 
export default TableBody;
```
#### 4.20 Sorting - Adding the Sort icons  
Used font awesome sort icon: https://fontawesome.com/icons/sort-up?s=solid&f=classic  
```
// In tableHeader.jsx

import React, { Component } from "react";

class TableHeader extends Component {
  ...
  ...
  // Adding the Sort icons
  renderSortIcon = (column) => {
    const {sortColumn} = this.props;
    if(column.path !== sortColumn.path) return null;
    if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
                className="clickable" // added 'clickable' class for pointer cursor in index.css
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)} // Rendering sort icon in table header
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
```
#### 4.21 Sorting - Extracting Table  
We will extract the 'table' from moviesTable.jsx and move it into a separate 'table.jsx' component for reusability in future if we want to make table of items
```
// In table.jsx

import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// Extracted Table here
const Table = (props) => {
  {columns, sortColumn, onSort, data} = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;

// In moviesTable.jsx

import React, {Component} from 'react';
import Like from "./common/like";
import Table from './common/table';

class MoviesTable extends Component {
  ...
  ...
  render() {
    const {movies, onSort, sortColumn} = this.props;
    return ( 
            // Adding Table component interface
            <Table
              columns={this.columns}
              data={movies}
              sortColumn={sortColumn}
              onSort={onSort}
            />
     );
  }
}
 
export default MoviesTable;
```
#### 4.22 Sorting - Extracting a Method  
```
// In movies.jsx

class Movies extends Component {
  ...
  ...
  // Extracted the filter logic from render() and moved it to a new method 'getPageData'
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies }; // 'totalCount' will return the length of the filtered items
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const { totalCount, data: movies } = this.getPageData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <p>Showing {totalCount} movies in the database.</p>
            <MoviesTable
              sortColumn={sortColumn}
              movies={movies}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```
#### 4.23 Destructuring Arguments  
```
// In table.jsx

import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// props will be replaced with the destructured arguments to make the code cleaner
const Table = ({columns, sortColumn, onSort, data}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
```
## 5. Routing:

#### 5.1 Adding React Router  
Install `react-router-dom`
```
// In index.js
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // Wrapping <App/> with <BrowserRouter> to add routing to our App
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
#### 5.2 Adding Routes  
1. **Redirect**: In React Router v4/5, <Redirect> tells the router when to automatically redirect from one path to another path by using `from` and `to` props.  
2. **Route**: Route is the conditionally shown component that renders some UI when its path matches the current URL.  
    Route props:  
    a. **path**: Path specifies a pathname we assign to our component  
    b. **component**: It refers to the component which will render on matching the path  
    c. **exact**: It is used to match the exact value with the URL  
3. **Switch**: It renders a route exclusively and when the exact match is found, it will ignore all other route and renders the UI.  
```
// In App.js
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
              // Adding route
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
```
#### 5.3 Adding the NavBar  
1. **Link**: It is used to create links to different routes using `to` props and implement navigation around the application. It works like HTML <a> tag.  
2. **NavLink**: It works just like <Link> with a property to make the link active.
```
// In navBar.jsx
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar">
          <Link className="navbar-brand" to="/">
            Movieo
          </Link>
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
        </div>
      </nav>
    );
  }
}

// In App.js
import NavBar from "./components/navBar";
    
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/> // Adding the NavBar
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
```
#### 5.4 Linking to the MovieForm  
1. **match**: https://v5.reactrouter.com/web/api/match  
2. **history**: https://v5.reactrouter.com/web/api/history  
```
// In moviesTable.jsx
import { Link } from "react-router-dom";
    
class MoviesTable extends Component {
    // To make clickable Titles in movie table, we need to add a content property to render a Link component
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    ...
    ...
  ];

  render() {
    ...
    ...
  }
};
    
// In movieForm.jsx

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        onClick={() => history.push("/movies")}
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
};
    
// In App.js
import MovieForm from "./components/movieForm";
    
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} /> // Linking to the MovieForm for each unique movie id
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
```
## 6. Forms:

#### 6.1 Introduction
Form is built using Bootstrap form template: https://getbootstrap.com/docs/4.3/components/forms/  
For each login form, we have to add a Route in App.js and NavLink in the navBar.jsx

#### 6.2 Building a Bootstrap Form
```
// In loginForm.js
class LoginForm extends Form {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form> // using Bootstrap Form
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.3 Handling Form Submission
To avoid the full page reload while submitting, we use preventDefault().
```
// In loginForm.js
class LoginForm extends Form {
handleSubmit = e => {
    e.preventDefault(); // To avoid the full page reload on submitting form
}
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          ...
          ...
        </form>
      </div>
    );
  }
}
```
#### 6.4 Refs
Refs: Refs are a function provided by React to access the DOM element and the React element that you might have created on your own.
```
// In loginForm.js
class LoginForm extends Form {
handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
}
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input autoFocus ref={this.username} id="username" type="text" className="form-control" /> // Ref is used access the DOM element
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.5 Controlled Elements
Controlled Elements: In React, Controlled Elements are those in which form’s data is handled by the elements’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled elements.
```
// In loginForm.js
class LoginForm extends Form {
// Elements's state handles form's data of the Controlled Element, hence it is the 'single source of truth' for the input elements.
state = {
    account: {
        username: '',
        password: ''
    }
}

handleChange = e => {
    const account = {...this.state.account};
    account.username = e.currentTarget.value;
    this.setState({ account });
}

handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
}
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
                value={this.state.account.username} // setting current value through props 
                onChange={this.handleChange} // updating the state by handling changes through callback function onChange()
                id="username" 
                type="text" 
                className="form-control" 
             />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={this.state.account.password} id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.6 Handling Multiple Inputs
```
// In loginForm.js
class LoginForm extends Form {
// Elements's state handles form's data of the Controlled Element, hence it is the 'single source of truth' for the input elements.
state = {
    account: {
        username: '',
        password: ''
    }
}

// Handling changes for multiple inputs (i.e. username and password)
handleChange = ({ currentTarget: input }) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account });
}

handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
}
  render() {
    const = { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
                value={account.username} // setting current value through props 
                onChange={this.handleChange} // updating the state by handling changes through callback function onChange()
                id="username" 
                name="username" 
                type="text" 
                className="form-control" 
             />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
                value={account.password} // setting current value through props
                onChange={this.handleChange} // updating the state by handling changes through callback function onChange()
                id="password" 
                name="password" 
                type="text" 
                className="form-control" 
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.7 Common Errors
1. While building forms, the properties of the state objects must be initialized to either to an empty string or some value received from the server.
2. 'null' and 'undefined' cannot be used as the value of a controlled element.
```
// In loginForm.js
class LoginForm extends Form {
    state = {
        account: {
            username: null, // WARNING
            password: ''
        }
    }
...
...
}
```
#### 6.8 Extracting a Reusable Input
```
// In loginForm.js
import Input from './common/input';

class LoginForm extends Form {
...
...
  render() {
    const = { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

// In input.jsx
import React from "react";
// Extracted reusable input component
const Input = ({ name, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                className="form-control"
            />
        </div>
    );
};
export default Input;
```
#### 6.9 Validation
Form validation in React allows an error message to be displayed if the user has not correctly filled out the form with the expected type of input.
```
// In loginForm.js
class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}

handleChange = ({ currentTarget: input }) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account });
}
    
// Validate method to implement validation in the form
validate = () => {
    return {username: "Username is required."};
}

// handleSubmit method handles and validates the form and checks for any error in the input field
handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    const = { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          ...
          ...
        </form>
      </div>
    );
  }
}
```
#### 6.10 Basic Validation Implementation
```
// In loginForm.js
class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}

handleChange = ({ currentTarget: input }) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({ account });
}

// Basic validation implementation
validate = () => {
    const errors = {};
    
    const { account } = this.state;
    if(account.username.trim() === "")
        errors.username = "Username is required";
    if(account.password.trim() === "")
        errors.password = "Password is required";
    
    return Object.keys(errors).length === 0 ? null : errors;
};

handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    ...
    ...
  }
}
```
#### 6.11 Displaying Validation Errors
```
// In input.jsx

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>} // Error message displayed in this div using conditional rendering, i.e. if error is truthy div will be return and if error is falsy div will be ignored
    </div>
  );
};
    
// In loginForm.jsx

class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}
...
...
handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // errors property should always set to an object, it should never be empty
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    const = { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username} // passing error prop
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password} // passing error prop
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.12 Validation on Change
```
// In loginForm.jsx

class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}
    
validate = () => {
    const errors = {};
    
    const { account } = this.state;
    if(account.username.trim() === "")
        errors.username = "Username is required";
    if(account.password.trim() === "")
        errors.password = "Password is required";
    
    return Object.keys(errors).length === 0 ? null : errors;
};

// validates one input
validateProperty = ({ name, value }) => {
    if(name === "username"){
        if(value.trim() === "") return "Username is required";
    }
    if(name === "password"){
        if(value.trim() === "") return "Password is required";
    }
};
  
// validates the entire form on change
handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    
    const account = {...this.state.account};
    account[input.name] = input.value;
    
    this.setState({ account, errors });
}

handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    ...
    ...
  }
}
```
#### 6.13 Exploring Joi
1. Joi in react: Joi module is a popular module for data validation. This module validates the data based on schemas. There are various functions like optional(), required(), min(), max(), etc which make it easy to use and a user-friendly module for validating the data.
2. Joi abortEarly: By default, Joi terminates the validation as soon as an error is encountered.
```
// In loginForm.jsx

import Joi from 'joi-browser';
    
class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}

// Joi schema    
schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
}
    
validate = () => {
    const result = Joi.validate(this.state.account, this.schema, { abortEarly: false });
    console.log(result);
    
    const errors = {};
    
    const { account } = this.state;
    if(account.username.trim() === "")
        errors.username = "Username is required";
    if(account.password.trim() === "")
        errors.password = "Password is required";
    
    return Object.keys(errors).length === 0 ? null : errors;
};

// validates one input
validateProperty = ({ name, value }) => {
    if(name === "username"){
        if(value.trim() === "") return "Username is required";
    }
    if(name === "password"){
        if(value.trim() === "") return "Password is required";
    }
};
  
// validates the entire form on change
handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    
    const account = {...this.state.account};
    account[input.name] = input.value;
    
    this.setState({ account, errors });
}

handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    ...
    ...
  }
}
```
#### 6.14 Validating a Form using Joi
```
// In loginForm.jsx

import Joi from 'joi-browser';
    
class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}

// Joi schema    
schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
}
    
// Validating a Form using Joi
validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if(!error) return null;
    
    const errors = {};
    for(let item of result.error.details)
        errors[item.path[0]] = item.message;
    return errors;
};

// validates one input
validateProperty = ({ name, value }) => {
    if(name === "username"){
        if(value.trim() === "") return "Username is required";
    }
    if(name === "password"){
        if(value.trim() === "") return "Password is required";
    }
};
  
// validates the entire form on change
handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    
    const account = {...this.state.account};
    account[input.name] = input.value;
    
    this.setState({ account, errors });
}

handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    ...
    ...
  }
}
```
#### 6.15 Validating a Field using Joi
```
// In loginForm.jsx

import Joi from 'joi-browser';
    
class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}

// Joi schema    
schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
}
    
// Validating a Form using Joi
validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if(!error) return null;
    
    const errors = {};
    for(let item of result.error.details)
        errors[item.path[0]] = item.message;
    return errors;
};

// Validating a Field using Joi
validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
};
  
// validates the entire form on change
handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    
    const account = {...this.state.account};
    account[input.name] = input.value;
    
    this.setState({ account, errors });
}

handleSubmit = e => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if(errors) return;
    
    console.log("Submitted");
}
  render() {
    ...
    ...
  }
}
```
#### 6.16 Disabling the Submit Button
```
// In loginForm.jsx

class LoginForm extends Form {
state = {
    account: {
        username: '',
        password: ''
    },
    errors: {}
}
...
...
  render() {
    const = { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          ...
          ...
            // this.validate() will either return 'null' which means falsy, or an 'object' which means truthy, hence disabling or enabling the button accordingly
          <button disabled={this.validate()} className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.17 Extracting a Reusable Form
1. Extracting reusable methods from loginForm.jsx to a new reusable component form.jsx
2. Generalise data used in reusable methods behind the form to suit different kinds of object used as form data. (We will use variable 'data' instead of variable 'account' to make a reusable method that can be used for different kinds of objects as form data)
```
// In form.jsx
    
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default Form;

// In loginForm.jsx
import Form from '';

// Inherits reusable methods of Form component into LoginForm
class LoginForm extends Form {
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    
    // Extracted all reusable methods from here and moved to the reusable component form.jsx

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    }
  render() {
    const = { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          ...
          ...
          <button disabled={this.validate()} className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
```
#### 6.18 Extracting Helper Rendering Methods
1. Input and Button are reusable components that can be extracted and moved to the reusable component form.jsx and they can be used as methods in the loginForm.jsx component.
2. By using rest and spread operator, we can easily use all the attributes that are in the props object dynamically.
```
// In loginForm.jsx

import Form from '';
    
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          // Reusable rendering methods
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

// In form.jsx
    
import Input from "./input";
    
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  ...
  ...
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type='text') => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
}
    
// In input.jsx

// spread and rest operator passes all the props dynamically to the Input component    
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
    
```
## 7. Calling Backend Services:

#### 7.1 JSON Placeholder  
1. JSON Placeholder: https://jsonplaceholder.typicode.com  
    i. It is used for API testing  
    ii. It provides publically accessable endpoints for API testing by sending HTTP requests(GET, POST, PUT, DELETE)  
    iii. When we make an HTTP request to the endpoints, we get an array of objects
2. JSONView Extension(Chrome/Firefox): It structures and formats the JSON data to make it more readable in browsers  

#### 7.2 HTTP Clients  
Libraries for making HTTP Requests:  
1. Fetch API
2. jQuery AJAX
3. Axios: https://www.npmjs.com/package/axios

#### 7.3 Getting Data  
1. The right place to call the server and get data using (axios.get), is in the componentDidMount() lifecycle hook.
2. Promise:
    i. A promise is an object that holds the result of an asynchronous operation(asynchronous operation completes in the future). After sending an HTTP request, there is always some delay until we get the reponse, it doesn't happen immediately. So the promise object promises to hold the result of an asynchronous operation.
    ii. Initially a promise remains in the pending state until the asynchronous operation is completed
    iii. After the operation is completed, the state changes to resolved(in case of success) or rejected(in case of failure)
3. await & async:  
    a. Await function is used to wait for the promise. It could be used within the async function block only. It makes the code wait until the promise returns a result. It only makes the async block wait.  
    b. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
```
// In App.js
import axois from "axios";

class App extends Component{
    state = {
        posts: []
    };
    // call the server and get data in componentDidMount()
    async componentDidMount(){
        // promise object holds the result of the asynchronous operation
        const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts"); // data is the array of objects, the response we receive from the API
        this.setState({ posts });
    }
    ...
    ...
}
```
#### 7.4 Creating Data  
```
// In App.js
import axois from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component{
    state = {
        posts: [],
    };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    // Creating data
    const obj = { title: "a", body: "b" };
    
    // Sending data by passing 'obj' to API using axios.post
    const { data: post } = await axios.post(apiEndpoint, obj);
    
    // Updating the view
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };
    ...
    ...
}
```
#### 7.5 Lifecycle of a request  
<p align="center">
    <img src="https://www.oreilly.com/api/v2/epubs/9781788397483/files/assets/4cee1e13-6f9e-443a-8196-b833459e2b7a.png" height="500px" width="850px">  
</p>

<b><p align="center">Make Request -> Receive Response</p></b>  
  
1. Common HTTP Request Methods:  
    i. GET: For getting data  
    ii. POST: For creating data  
    iii. PUT: For updating data  
    iv. DELETE: For deleting data  

2. HTTP Option Request: For security reasons, when we send data to a different domain (cross-domain requests) such as API endpoints, browsers usually send a 'preflight' HTTP OPTIONS request to the target server before sending the data there.

3. HTTP Response: The response object received after making an HTTP request which includes data, header, status, etc.

#### 7.6 Updating Data  
axios.put(): It is used to update the entire object
axios.patch(): It is used to update a particular property of the object
```
// In App.js
import axois from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component{
    state = {
        posts: [],
    };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleUpdate = async (post) => {
    // Updating data
    post.title = "UPDATED";
    
    // Sending changed data by passing 'post' object to API using axios.put
    await axios.put(apiEndpoint + "/" + post.id, post);

    // Updating the view
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };
    ...
    ...
}
```
#### 7.7 Deleting Data  
```
// In App.js
import axois from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component{
    state = {
        posts: [],
    };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleDelete = async (post) => {
    // Sending a request to delete a post using its id via axios.delete 
    await axios.delete(apiEndpoint + "/" + post.id);
    
    // Updating the view by filtering the deleted post
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
  };
    ...
    ...
}
```
#### 7.8 Optimistic vs Pessimistic Updates  
1. Pessimistic Update:  
    i. In this, we call the server first and then update the view  
    ii. The response is received after some delay, hence the view will also be updated after some delay  
    iii. While calling the server if an error occurs, the view will not be updated  
    iv. Call to server may succeed or fail  
    
```
handleDelete = async (post) => {
    // Calling the server first will return a response after some delay
    await axios.delete(apiEndpoint + "/" + post.id);
    
    // Then updating the view after some delay
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
  };
```
    
2. Optimistic Update:  
    i. First and foremost, we will store a reference to the original state  
    ii. We assume that most of the time, the call to the server succeeds  
    iii. To avoid any delay in updating the view, we will update the view first assuming the server call will succeed later  
    iv. In case the server call fails, we can revert the view update back to the previous/original state  
    v. This implementation gives the illusion of fast view update  
    vi. In case the server call fails, we can detect the error and revert the view update by placing the server call in the try-catch block  
    
```
handleDelete = async (post) => {
    // Keeping reference to the original state
    const originalPosts = this.state.posts;

    // Updating the view before the server call assuming it succeeds
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    // Placing the server call inside try-catch block to detect error and reverting the view update back to the original state, if the server call fails
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
    } catch (ex) {
      alert("Something failed while deleting the post!");
      this.setState({ posts: originalPosts });
    }
};
```
#### 7.9 Expected vs Unexpected Errors  
1. Expected Errors: Errors that the API endpoints predicts and returns  
    i. Eg: (404: not found, 400: bad request) - CLIENT ERRORS  
    ii. How to handle: Display a specific error message  
2. Unexpected Errors: Errors that are not expected to happen in normal situations  
    i. Eg: (network down, server down, DB down, bug in code)  
    ii. How to handle: Log the errors and display a generic and friendly error message  
```
handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(apiEndpoint + "/" + post.id);
    } catch (ex) {
      // Expected Error handling for specific status code
      if(ex.response && ex.response.status === 404){
        alert("This post has already been deleted.");
      }
      // Unexpected Error
      else{
        console.log("Logging the error");
        alert("Something failed while deleting the post!");
      }
      this.setState({ posts: originalPosts });
    }
};
```
#### 7.10 Handling Unexpected Errors Globally  
1. axios.interceptors: It can be used to intercept the requests and responses, and if a response with an error is found, it can be handled globally. Interceptors are automatically implemented for all the server calls in the module  

2. axios.interceptors.response.use(success, error) method: It takes two parameters, both the parameters are functions(first parameter for successful response, second parameter for response with error)  

3. We should only use try-catch block if we want to handle that error in a specific way, otherwise we should leave the error handling to the interceptors  
```
// In App.js
import axois from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

axios.interceptors.response.use(null, (error) => {
    // Expected Error
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    
    // Unexpected error
    if (!expectedError) {
        console.log("Logging the error",error);
        alert("An unexpected error occurred.");
    }
    return Promise.reject(error); // It passes control to the catch block for further reverting the view update to the original state, in case of using try-catch block
});

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(apiEndpoint + "/" + post.id);
    } 
    // Error handling for specific status code and for specific purpose(reverting the view update)
    catch (ex) {
      if(ex.response && ex.response.status === 404){
        alert("This post has already been deleted.");
      }
      this.setState({ posts: originalPosts }); // reverting the view update back to original state
    }
 };
```
#### 7.11 Extracting a Reusable HTTP Service  
Extracting a reusable HTTP service to implement axios interceptors and http CRUD operations globally
```
// In /services/httpService.js

import axios from "axios";

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    // Unexpected error
    if (!expectedError) {
        console.log("Logging the error", error);
        alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
  });

  // Exporting object for http CRUD operations                                
  export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
                                  
// In App.js

import http from "./services/httpService"; // Importing httpService to implement axios interceptors and http CRUD operations(now we will use http.get, http.delete, etc.)
                                  
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(apiEndpoint);
    this.setState({ posts });
  }
  
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(apiEndpoint + "/" + post.id);
    }
    catch (ex) {
      if(ex.response && ex.response.status === 404){
        alert("This post has already been deleted.");
      }
      this.setState({ posts: originalPosts }); // reverting the view update back to original state
    }
 };                                  

```
#### 7.12 Extracting a Config Module  
Extracting a reusable Config module to access API endpoints globally
```
// In /src/config.json

{
    "apiEndpoint": "https://jsonplaceholder.typicode.com/posts"
}
    
// In App.js
    
import config from "./config.json"; // Importing config to access API endpoints(now we will use config.apiEndpoint)

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }
  
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
    }
    catch (ex) {
      if(ex.response && ex.response.status === 404){
        alert("This post has already been deleted.");
      }
      this.setState({ posts: originalPosts });
    }
 };
```
#### 7.13 Displaying Toast Notification  
React Toastify: https://www.npmjs.com/package/react-toastify  
It lets us add notification to the app
```
// In /services/httpService.js

import axios from "axios";
import { toast } from "react-toastify";    

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    // Unexpected error
    if (!expectedError) {
        console.log("Logging the error", error);
        toast.error("An unexpected error occurred."); // toast.error() helper method to show toast notification for error
    }
    return Promise.reject(error);
  });

  // Exporting object for http CRUD operations                                
  export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};    
    
// In App.js
    
import http from "./services/httpService";                                  
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
    
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }
  
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
    }
    catch (ex) {
      if(ex.response && ex.response.status === 404){
        alert("This post has already been deleted.");
      }
      this.setState({ posts: originalPosts }); // reverting the view update back to original state
    }
    render() {
    return (
      <React.Fragment>
        <ToastContainer /> // Component ToastContainer added to the app for showing notifications
        ...
        ...
      </React.Fragment>
    );
  }
};
    
```
#### 7.14 Logging Errors  
Logging as a service provider is used to log errors/issues of Apps running in production environment  
Sentry.io: https://sentry.io  
Sentry's Raven.js: https://raven-js.readthedocs.io/en/stable/install.html (install using terminal)  
```
// In index.js

import Raven from "raven-js";

// Copied configuration code from Sentry.io user account
Raven.config(       
    "https://1a8c43b2e39e4a1b8612b1535800c790@o4504084110245888.ingest.sentry.io/4504084116865024"
).install();
    
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
    
// In /services/httpService.js
    
import Raven from "raven-js";
    
axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    // Unexpected error
    if (!expectedError) {
        Raven.captureException(error); // Passing error in Raven to log in Sentry.io
        toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
  });
                                  
  export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}; 
```
#### 7.15 Extracting a Logger Service  
Extracting a reusable logger service component that can be accessed in any app file to log errors  
```
// In /services/logService.js

import Raven from "raven-js";

function init(){
    // Copied configuration code from Sentry.io user account                              
    Raven.config(
        "https://1a8c43b2e39e4a1b8612b1535800c790@o4504084110245888.ingest.sentry.io/4504084116865024"
    ).install();
}

function log(error){
    Raven.captureException(error); // Passing error in Raven to log in Sentry.io
}

// exporting method to install Raven and log errors                                
export default {
    init,
    log
};                                  
                                  
// In index.js

import logger from "./services/logService"; // importing logger service Raven to initialize/install in React App

logger.init(); // Installing logger service Raven
    
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
    
// In /services/httpService.js

import logger from "./services/logService";

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    // Unexpected error
    if (!expectedError) {
        logger.log(error); // passing error to log function in logger service to log error
        toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
```
#### 7.16 Installing MongoDB on Linux  
1. Homebrew: https://brew.sh/  
   i. Run `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`                               
2. MongoDB:    
   i. Run `brew install mongodb`  
   ii. Run `sudo mkdir -p /data/db`  
   iii. Run ```sudo chown -R `id -un` /data/db```  
   iv. Run `mongod`                               
3. MongoDB Compass: https://www.mongodb.com/try/download/compass  
   i. Install the package  
   ii. Open the app and connect to host    
                                  
#### 7.17 Setting Up the Node Backend and Postman App  
1. Download Movieo node backend:   
    i. Clone the repository in the same directory containing the movieo app
2. Postman Chrome Extension: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en  
    i. Open the extension and paste API endpoint url  
    ii. Perform CRUD Operations  
3. Disabling Authentication:  
   i. Setting "requiresAuth" as false will disable authentication in the database  
   ii. Restart mongodb server after making changes                                 
```
// In /config/default.json

{
  "jwtPrivateKey": "unsecureKey",
  "db": "mongodb://localhost/movieo",
  "port": "3900",
  "requiresAuth": false
}
```
#### 7.18 Adding HTTP and Log Services  
```
// In /services/httpService.js

    import axios from "axios";
    import logger from "./logService"
    import { toast } from "react-toastify";

    axios.interceptors.response.use(null, (error) => {
        const expectedError =
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500;
        if (!expectedError) {
            logger.log(error);
            toast.error("An unexpected error occurred.");
        }
        return Promise.reject(error);
    });

    export default {
        get: axios.get,
        post: axios.post,
        put: axios.put,
        delete: axios.delete
    };    

// In /services/logService.js

    function init(){
    }

    function log(error){
        console.error(error);
        // Raven.captureException(error);
    }

    export default {
        init,
        log
    };

// In App.js

import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer /> // Component ToastContainer added to the app for showing notifications
        ...
        ...
      </React.Fragment>
    );
  }
}

```
#### 7.19 Getting data from database  
```
// In /services/genreService.js

    import http from "./httpService";

    // http GET request to get genres from the database
    export function getGenres() {
       return http.get("http://localhost:3900/api/genres");
    }

// In /services/movieService.js

    import http from "./httpService";

    const apiEndpoint = "http://localhost:3900/api/movies";

    // http GET request to get movies from the database
    export function getMovies(){
        return http.get(apiEndpoint);
    }

    // http DELETE request to delete a movie from the database based on movie id
    export function deleteMovie(movieId){
      return http.delete(apiEndpoint + "/" + movieId);
    }

// In movie.js

import { getGenres } from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";
import { toast } from "react-toastify";

  async componentDidMount() {
    const { data } = await getGenres(); // Getting data from promise object
    const genres = [{ _id: "", name: "All Genres" }, ...data]; // Populating the genres
    
    const { data: movies } = await getMovies(); // Populating the movies
    this.setState({ movies, genres }); // Updating the view
  }
  
    handleDelete = async (movie) => {
    // Keeping reference to the original state
    const originalMovies = this.state.movies;

    // Updating the view before the server call, assuming it succeeds
    const filterMovie = (m) => {
      return m._id !== movie._id;
    };
    const movies = originalMovies.filter(filterMovie);
    this.setState({ movies });

    // Placing the server call inside try-catch block to detect error and reverting the view update back to the original state, if the server call fails
    try{
      await deleteMovie(movie._id);
    } catch(ex){
      if(ex.response && ex.response.status === 404){
        toast.error("This movie has already been deleted")
      }
      this.setState({ originalMovies });
    }
  };

```
#### 7.20 Extracting a Config File  
Extracting a reusable Config module to access API endpoints globally
```
// In /src/config.json

{
    "apiUrl": "http://localhost:3900/api"
}

// In /services/genreService.js

    import http from "./httpService";
    import config from "../config.json"; // Importing config to access API endpoints(now we will use config.apiUrl)

    export function getGenres() {
       return http.get(config.apiUrl + "/genres");
    }

// In /services/movieService.js

    import http from "./httpService";
    import config from "../config.json"; // Importing config to access API endpoints(now we will use config.apiUrl)

    const apiEndpoint = config.apiUrl + "/movies";

    export function getMovies(){
        return http.get(apiEndpoint);
    }

    export function deleteMovie(movieId){
      return http.delete(apiEndpoint + "/" + movieId);
    }
```
#### 7.21 Populating Movie Form  
```
// In /services/movieService.js

    import http from "./httpService";
    import config from "../config.json";

    const apiEndpoint = config.apiUrl + "/movies";
    
    // http GET request to get movies from the database
    export function getMovies(){
        return http.get(apiEndpoint);
    }
    
    // http GET request to get a movie's data from the database based on movie id
    export function getMovie(movieId){
        return http.get(apiEndpoint + "/" + movieId);
    }
    
    // http DELETE request to delete a movie from the database based on movie id
    export function deleteMovie(movieId){
      return http.delete(apiEndpoint + "/" + movieId);
    }
    
// In movieForm.jsx

import { getMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

  async populateGenres(){
    const {data: genres} = await getGenres(); // Getting data property from promise object
    this.setState({ genres }); // Updating the view
  }

  async populateMovie(){
    // Placing the server call inside try-catch block to detect incorrect movie id and redirecting user to not-found page, if the response returns with error
    try{
      const movieId = this.props.match.params.id; 
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId); // Getting data property from promise object
      this.setState({ data: this.mapToViewModel(movie) }); // Populating the movie's data in movie form
    } catch(ex){
      if(ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found"); // redirecting user to not-found page
    }
  }

  async componentDidMount() {
    await this.populateGenres(); // Getting promise object to populate genres data
    await this.populateMovie(); // Getting promise object to populate movie's data
  }

```
#### 7.22 Saving the Movie  
```
// In /services/movieService.js

    import http from "./httpService";
    import config from "../config.json";

    const apiEndpoint = config.apiUrl + "/movies";
    
    // Refactoring code for movie url
    function movieUrl(id){
      return `${apiEndpoint}/${id}`;
    }
    
    export function getMovies(){
        return http.get(apiEndpoint);
    }
    
    export function getMovie(movieId){
      return http.get(movieUrl(movieId));
    }
    
    export function saveMovie(movie){
      // Updating movie using http PUT method
      if(movie._id){
        const body = {...movie}; // Cloning object to avoid directly modifying the original state of movie object
        delete body._id; // REST API does not allow id property in body of the request
        return http.put(movieUrl(movie._id), body);    
      }
      // Adding new movie using http POST method
      return http.post(apiEndpoint, movie);
    }
    
    export function deleteMovie(movieId){
      return http.delete(movieUrl(movieId));
    }
    
// In movieForm.jsx

import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
    ...
    ...
    doSubmit = async () => {
        await saveMovie(this.state.data); // Saving data and getting response data from the promise object
        this.props.history.push("/movies");
    };
```
## 8. Authentication and Authorization:  
#### 8.1 Submitting the Registration Form  
We will make a POST request from the Client to the API endpoint and pass the form data.
```
// In userService.js

    import http from "./httpService";
    import config from "../config.json";

    const apiEndpoint = config.apiUrl + "/users"; // API endpoint to register users

    // Making POST request to the API endpoint and passing form data
    export function register(user){
        return http.post(apiEndpoint, {
            email: user.username,
            password: user.password,
            name: user.name
        });
    }

// In registerForm.jsx

    // Importing userService to make POST request from the registerForm to register new users
    import * as userService from "../services/userService";

    class RegisterForm extends Form {
      ...
      ...
      doSubmit = async () => {
        await userService.register(this.state.data); // passing form data to register method to make POST request
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default RegisterForm;

```
#### 8.2 Handling Registration Errors  
Using Try-Catch block to handle registration errors
```
// In registerForm.jsx

    import * as userService from "../services/userService";

    class RegisterForm extends Form {
      ...
      ...
      doSubmit = async () => {
        try{
          await userService.register(this.state.data);
        }
        catch(ex){
          if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors};
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default RegisterForm;
```
#### 8.3 Submitting the Login Form  
1. The Client will make a POST request to the API endpoint.
2. The API will return a response with a JWT.
3. Againt the Client will send this JWT back to the authorization API.
4. If the JWT is valid, the user will be logged in. Otherwise, there will be an login error.
```
// In authService.js
    import http from "./httpService";
    import config from "../config.json";

    const apiEndpoint = config.apiUrl + "/auth"; // API endpoint to login users

    // Making POST request to the API endpoint and passing form data
    export function login(user) {
      return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
      });
    }

// In loginForm.jsx
    // Importing authService to make POST request from the loginForm to login users
    import auth from "../services/authService";

    class LoginForm extends Form {
      ...
      ...
      doSubmit = async () => {
        await auth.login(this.state.data); // passing form data to login method to make POST request
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default LoginForm;
```
#### 8.4 Handling Login Errors  
Using Try-Catch block to handle login errors
```
// In loginForm.jsx
    import auth from "../services/authService";

    class LoginForm extends Form {
      ...
      ...
      doSubmit = async () => {
        try{
          await auth.login(this.state.data);
        }
        catch(ex){
          if(ex.response && ex.response.status === 400){
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default LoginForm;
```
#### 8.5 Storing the JWT  
```
// In loginForm.jsx
    import auth from "../services/authService";

    class LoginForm extends Form {
      ...
      ...
      doSubmit = async () => {
        try{
          const { data: jwt } = await auth.login(this.state.data); // passing form data to login method to make POST request
          localStorage.setItem("token", jwt); // Upon receiving a JWT as response from the API, we store the JWT in the browser local storage
          window.location("/"); // If the JWT is valid, user is redirected to home, followed by a full page reload(window.location is used) 
        }
        catch(ex){
          if(ex.response && ex.response.status === 400){
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default LoginForm;
```
#### 8.6 Logging in the User upon Registration  
1. Upon registering a user, user will be automatically redirected to home, skipping the login page.

2. To access the JWT from the browser, we must whitelist or allow the x-auth-token in our backend POST request API(in register users or manage users.).
    a. Header("access-control-expose-headers") should be added in generateAuhtToken() to whitelist x-auth-token in the browser.
```
// In registerForm.jsx

    import * as userService from "../services/userService";

    class RegisterForm extends Form {
      ...
      ...
      doSubmit = async () => {
        try{
          const response = await userService.register(this.state.data); // passing form data to register method to make POST request
          localStorage.setItem("token", response.headers["x-auth-token"]); // Upon receiving a JWT as response from the API, we store the JWT in the browser local storage
          window.location("/"); // If the JWT is valid, user is redirected to home, followed by a full page reload(window.location is used) 
        }
        catch(ex){
          if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors};
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };

      render() {
        return (
          ...
          ...
        );
      }
    }

    export default RegisterForm;
```
#### 8.7 JSON Web Tokens (JWT)  
JSON Web Token (JWT): https://jwt.io/  

JWT has three parts:  
1. Header: Includes the details of the encoding algorithm and the type of token  
2. Payload:  
    a. Includes the JSON Object containing the user data and creation time of token  
    b. Hence, we can decode the web token, extract the attributes(user data) and we can easily use it anywhere in react app  
3. Verify Signature:  
    a. It is a unique digital signature that is generated based on the header, payload, and secret key(only available on the server)  
    b. This prevents any malicious user from modifying a web token, as he/she cannot modify the secret key unless he/she breaks into the server and finds the secret key  

#### 8.8 Getting the Current User  
NPM JWT Decode: Install <code>jwt-decode@2.2.0</code> to decode a JWT and get the user data 
```
// In App.js
import jwtDecode from "jwt-decode";

class App extends Component {
  state = {};

  componentDidMount() {
    try{
      const jwt = localStorage.getItem("token"); // Getting token
      const user = jwtDecode(jwt); // Decoding token and getting user data object
      this.setState({ user });
    }
    catch(ex){} // Do nothing in event of no web token found error
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        ...
        ...
      </React.Fragment>
    );
  }
}

export default App;
```
#### 8.9 Displaying Current User on NavBar  
```
// In navBar.jsx
const NavBar = ({ user }) => { // Passing user prop
return (
      <nav className="navbar navbar-light bg-light" style={{ padding: 0 }}>
        <div className="navbar">
          ...
          ...
          // Conditional rendering (if no user is logged in -> display Login and Register link in NavBar)
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          // Conditional rendering (if a user is logged in -> display user's name and Logout link in NavBar)
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link btn btn-outline-danger" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    );
}

export default NavBar;
```
#### 8.10 Logging out a User  
We will create a separate 'logout' component and implement the logout feature and then we will register a new '/logout' Route in App.js and then we will use the 'logout' component there
```
// In logout.jsx

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem("token"); // Removing the token from the browser's local storage
        window.location="/"; // Reloading the page
    }

    render() { 
        return null;
    }
}
 
export default Logout;
```
#### 8.11 Calling Protected API Endpoints  
```

```
#### 8.12 Fixing Bi-directional Dependencies  
```

```
#### 8.13 Authorization  
```

```
#### 8.14 Showing/Hiding Elements based on the User  
```

```
#### 8.15 Protecting Routes  
```

```
#### 8.16 Extracting ProtectedRoute  
```

```
#### 8.17 Redirecting after Login  
```

```
#### 8.18 Hiding the Delete Column  
```

```
