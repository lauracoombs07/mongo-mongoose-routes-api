
// const p = Promise.resolve({ id: 1});
// p.then(result => console.log(result));


// const p = Promise.reject(new Error('reason for rejection'));
// p.catch(error => console.log(error));

//always use an error object

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 1...');
        resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])//new promise when all are resolved
    .then(result => console.log(result))
    // .catch(err => console.log('Error', err.message));

//or to do something after the first is done...

Promise.race([p1, p2])//new promise when all are resolved
.then(result => console.log(result)) //value of first fulfilled promise
