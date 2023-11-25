// Javascript is a single threaded language. Thread is a single sequential flow of control. Javascript is a synchronous language with asynchronous capabilities. A thread has a call stack and memory heap.

// CALLSTACK

// In javascript callstack keeps track of functions. It manages execution contexts. Stacks are LIFO (Last In First Out). Like stack of plates in a wedding.

//EXAPMLE

function first() {
  console.log("first");
  second();
}
function second() {
  console.log("second");
  third();
}
function third() {
  console.log("third");
}

first();

// 1. In the callstack first of all global execution phase takes place.
// 2. Then first function gets on the callstack.
// 3. Then second function gets on the callstack.
// 4. Then third function gets on the callstack.
// 5. Third function gets popped off.
// 6. Second function gets popped off.
// 5. First function gets popped off.

// That is the flow of Callstack
