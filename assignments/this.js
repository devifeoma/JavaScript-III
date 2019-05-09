/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// ==========Principle 1: Window Binding==========
// It states that if a function is contained in the global scope, the value of `this` inside of that function will be the window object.

// code example for Window Binding
function greetUser(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greetUser('John');

// the function above being on the global scope may be seen as a method of the window object and is same as referencing window.greetUser('john'); Hence this inside of greetUser points to window.
window.greetUser('Max')


// ==========Principle 2: Implicit Binding==========
// This states that if a function is called by a preceding dot, the object before that dot is this.

// code example for Implicit Binding
const greetAgain = {
    greeting: 'Hi ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetAgain.speak('Jose');


// ==========Principle 3: New binding==========
// This states that if a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

// code example for New Binding
let workspace = 'Vertebra Tech Hub';

function User(name, location) {
    this.name = name,
    this.location = location
}

User.prototype.about = function () {
    console.log(`${this.name} comes to ${workspace} from ${this.location}`)
    console.log(this)
}

const user1 = new User('Jose', 'Ajah');
const user2 = new User('Eloka', 'Lakowe');

user1.about();
user2.about();


// ==========Principle 4: Explicit Binding==========
// This states that if JavaScript’s call or apply method is used, this is explicitly defined.

// code example for Explicit Binding
const justaAbout = User.prototype.about;
justaAbout.call(user1)