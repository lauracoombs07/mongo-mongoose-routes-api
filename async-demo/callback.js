//Asynchronous
console.log('Before');
getUser(1, getRepositories);
('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);// string, callback
};
function getCommits(repos) {
    getCommits(repo, displayCommits);
};
function displayCommits(commits) {
    console.log(commits);
};


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
            // return { id: id, gitHubUsername: 'mosh' };
        }, 2000);
    })

}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)}