// function saySomething(message){
//     return message
// }

// function square(num){
//     return num*num
// }

// function sum(a=10,b){
//     let sum;
//     sum= a+b
//     return sum
// }

// let res =sum(0,5)
// console.log(res)
// function //function-name (camelCase) // function-body

// parameter vs argument

// let result =saySomething("Hello") //function call | function invoke

// console.log(result)

// console.log(square(5))

// imperative programming (step-by-step)
// procedural Programming (Reusable Block | Component(Function))

// Function Javascript first class citizen of Javascript

// Function store in a variable === function expression
// Function can be pass as an argument into another function
// High order function = function return function as a value

// console.log(square)
// square(5)
var num =10;

function square(num){
    return num * num
}

const result1 = square(5)
const result2 = square(num)

console.log(result1)
console.log(result2)