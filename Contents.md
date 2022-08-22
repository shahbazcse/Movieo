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
