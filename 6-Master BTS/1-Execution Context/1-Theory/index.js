// There are two phases happening in Execution Context.

// 1) Memory Creation Phase (Cannot see)
// 2) Code Execution Phase  (Can see)

// 1. Memory Creation Phase

// 1) Create the global Object (browser = window)
// 2)Create the THIS Object and bind it to global Object
// 3) Setup memory heap for storing variables and function references (whole  function definition)
// 4)Stores functions and variables in global execution context and set them to undefined.

// 2. Execution Phase

// 1)Execute code line by line
// 2) Whenever there is a function call () it creates a new execution context.
