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

t.push(5)

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

