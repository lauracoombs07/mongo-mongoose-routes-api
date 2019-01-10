console.log('Before');
setTimeout(() => {//Async or nonblocking function.
    console.log('Reading a user from a database...')//calls this line after 2 seconds. doesn't block the rest from happening
}, 2000);//asynchronous doesn't mean concurrent
console.log('After');

//synchronous, a waiter waits until each meal is done before delivering. blocking
//importand whenever dealing with network