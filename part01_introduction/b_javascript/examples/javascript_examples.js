/////VARIABLES
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
//x = 4               // causes an error
//consts not actually define a variable -- a constant, the value can no longer be changed
// let defines a normal variable
//is also possible to define variables with var -- though is not advisable

//the data type assigned to the variable can change//

/////ARRAYS

const t = [1, -1, 3]

t.push(5) // adds a new item to the array

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
}) 
//the contents on the array can be modified though it is defined as const
//an array is an object, the variable always points to the same object, ut the content of the array changes as new items area dded to it

/*one way for iterating through items is using forEach
forEach recieves a function defined using the arrow syntax as a parameter
value => {
    console.log(value)
  }*/

//forEach calls the function for each of the items in the array, passing the individual elements as an argument
//the function as the argument forEach may recieve other arguments

//push adds a new element to the array
//when using react, techniques from functional programming are used
//functional programming ses immutable data structures
//it is preferable to use the method concat, not adding an element to the array, but creating a new array that combines the old aray and the contnet that wants to be added

const v = [1, -1, 3]

const t2 = v.concat(5)

console.log(v)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

//the method v.concat(5) does not add a new item to the old array but returns a new array

///map method

const tt = [1, 2, 3]

const m1 = tt.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
//based on the old array, map creates a new one -- the function given as a parameter is used to create the items
//map can also transfomr the array into something different

const m2 = tt.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
//here an array filled with integers is transformed into an array containing strings of html
//individual items from an array can be assigned to variables with destructuring assignment
const ttt = [1, 2, 3, 4, 5]

const [first, second, ...rest] = ttt

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
//thanks to the assignment, the variables frist and second recieve the first 2 integers of the array as value
//the remaining integers are "collected" into an array of their own with rest

/////OBJECTS

//there are a few ways to define objects in javascript
//one common method is using object literals -- listing their properties within braces

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
const object2 = {
name: 'Full Stack web application development',
level: 'intermediate studies',
size: 5,
}

const object3 = {
name: {
    first: 'Dan',
    last: 'Abramov',
},
grades: [2, 3, 5, 3],
department: 'Stanford University',
}

//the valueso f the porperties can be of any type, like integers, strings, arrays...
//the porperties of an object are referenced using dot notation or brackets

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

//you can add properties to an object on the fly by using dot notation or brackets

object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log(object1)

//the latter of the additions needs to be on brackets because of space characters
//objects in js can also have methods -- but not today satan

//objects can also be defined using contructor functions, reulting in mechanism reminiscent of many other programming languages

/////FUNCTIONS

//arrow functons are defined as follows

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5) // calling the function
console.log(result)

//if there's a single parameter, we can exclude the parantheses from the definition

const square = p => {
    console.log(p)
    return p * p
}

//if the function only contains a single expression then the braces are not needed
//the function only returns the result of its only expresion

const square_ = p => p * p
const result_ = square_(2) // calling the function
console.log(result_)

//this form is handy when manipulationg arrays -- like using the map method
const tttt = [1, 2, 3]
const tSquared = tttt.map(p => p * p)
console.log(tSquared)
// tSquared is now [1, 4, 9]

//the arrow function was added to js recently
//prior to this the only way to define functions was by using function

//with function, there are two eays to reference the function -- like giving in a function declaration
function product(a, b) {
    return a * b
}
  
const result___ = product(2, 6)
console.log(result___)
// result is now 12

//the other way is using a function expression
//there's no need to give the function a name and the definition may reside among the rest of the code

const average = function(a, b) {
    return (a + b) / 2
}

const result____ = average(2, 5)
console.log(result____)
// result is now 3.5