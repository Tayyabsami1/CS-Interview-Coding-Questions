# Array Methods

- Map creates a new array by applying a function to each element of the original array.
- forEach doesnot create it just iterates through the array and performs a function on each element.

# Core JS

- JS Is single threaded language. We use concurrency module to hanldle multiple tasks at the same time.
- Long running tasks are executed by the event loop , execute in background and put them back in the main thread when they are done.
- ## JS Engine
  - JS Engine contains a Call Stack and a Heap.
  - Event is put in the call back queue and when the call stack is empty, the event loop pushes the event from the callback queue to the call stack for execution.
  - Microtasks Queue , Callback Queue and Call Stack are the three main components of the event loop.
  - Call stack executes syncronous code.
    -Completed Async Callbacks are put in the Callback Queue.

## Prmises

- Promise.all() is used to run multiple promises in parallel and wait for all of them to resolve before proceeding. If one of the promises rejects, the entire Promise.all() will reject
  -Promise.race() is used to run multiple promises in parallel and proceeds as soon as the first promise resolves or rejects
