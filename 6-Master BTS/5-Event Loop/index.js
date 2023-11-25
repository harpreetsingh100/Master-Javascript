// An event loop is something that pulls stuff out of the task queue and places it onto the callstack whenever the callstack stack becomes empty.The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.

// Whenever we invoke a callback function it goes to the task que and waits there until the callstack becomes empty. When the callstack becomes empty event loop puts it onto the callstack.

// But there is one more que which is called microtask que. That has higher priority than task que. In microtask que has all callbacks from promises and mutation observers. Lets say there are 5 callback functions in microtask que and one in task que. All 5 callback function will be pushed onto callstack first and when they are popped off then the callback function in task que will be pushed onto the callstack.

// But If there is a callback function in microtask que that create another callback function and that creates another and so on then the callback in task que wont get a chance of getiing pushed onto the callstack. That is called the starvation of callback.
