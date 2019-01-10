// console.log('Before');
// const user = getUser(1, (user) => {
//     console.log('User', user)
// });

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => ('Error', err.message));

// console.log('After');

//When using Async and await wrap your code in a try/catch block

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message)
    }
}
displayCommits();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log();
            resolve(['commit']);
        }, 2000);
    });
        
}
// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...');
//         callback({ id: id, gitHubUsername: 'mosh' });
//         // return { id: id, gitHubUsername: 'mosh' };
//     }, 2000);
// }