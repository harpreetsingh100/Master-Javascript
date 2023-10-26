// There are three ways of storing variabls in Javascript.

// 1) Var
// 2) Let
// 3) Const

// How to Store Varibales ?

// var firstName;
// let lastName;
// const fullName;

// Creating a variable in Js is called defining a varibale. After the declaration, the variable has no value (technically it is undefined). You can assign the value like this. You can also assign a value to the variable when you declare it:

var firstName = "Harpreet";
let lastName = "Singh";
const fullName = "Harpreet Singh";

// Differences in var,let and const

// 1) var declarations are globally scoped while let and const declarations are block scoped.
// 2) var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// 3) They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// 4) While var and let can be declared without being initialized, const must be initialized during declaration.
