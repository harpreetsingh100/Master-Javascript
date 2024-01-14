// Promise is for eventual completion of task. It is an Object in Js. It is a solution to Callback hell

// Promise can have three states:-

// 1) Pending
// 2) Fullfiled (Resolved)
// 3) Rejected

// Promise has two things:-

// 1) Promise State (Pending,Resolved,Rejected)
// 2) Promise Result (Result)

let promise = new Promise((resolve, reject) => {
  resolve("Fullfiled");
});

let promise2 = new Promise((resolve, reject) => {
  reject("Error");
});

// resolve and reject are callbacks provided by Js.
