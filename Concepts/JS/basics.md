# Array Methods

- Map creates a new array by applying a function to each element of the original array.
- forEach doesnot create it just iterates through the array and performs a function on each element.

# Core JS

- JS Is single threaded language. We use concurrency module to hanldle multiple tasks at the same time.
- Long running tasks are executed by the event loop , execute in background and put them back in the main thread when they are done.

## Execution Content

- It is the environment in which JS Code is evaluated and run. example Global Execution Context (GEC) , Function Exection Content (FEC)

### Phases of Execution Context

- Creation Phase: The JS engine scans the code and sets up the Variable Environment: allocates memory for variables and functions.
- Function declarations are hoisted and the entire function is stored in memory (not just the name).
- Hoisting is the JS behavior of moving declaration to the top of their scope.
- let/const are hoisted too, but into a separate space — they exist but are uninitialized, sitting in the "Temporal Dead Zone" until their actual line of code runs.
- Temporal Dead Zone is the period between entering a scope and the line where let or const is declated.

```
console.log(a); // ReferenceError

let a = 10;
```

## JS Engine

- JS Engine contains a Call Stack and a Heap.
- Event is put in the call back queue and when the call stack is empty, the event loop pushes the event from the callback queue to the call stack for execution.
- Microtasks Queue , Callback Queue and Call Stack are the three main components of the event loop.
- Call stack executes syncronous code.
  -Completed Async Callbacks are put in the Callback Queue.

## Promises

- Promise.all() is used to run multiple promises in parallel and wait for all of them to resolve before proceeding. If one of the promises rejects, the entire Promise.all() will reject
  -Promise.race() is used to run multiple promises in parallel and proceeds as soon as the first promise resolves or rejects

## Scopes

- Global , function , block , lexical
- var leaks out of block scope but respects function scope
- Illegal shadowing is if we declare a let in global scope and then define a var in the block scope.

### Closures

- Function remembers the variables from the scope it was defined in.

```
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## var let const

- const variable is immutable
- const object is mutable
