const github = require('./github');

const username = process.argv[2];
const repo = process.argv[3];

if (repo) {
    github.getRepo(username, repo, (error, repo) => {
        if (error) return console.error('Ошибка: ', error.message);

        console.log(repo);
    });
} else {
    github.getRepos(username, (error, repos) => {
        if (error) return console.error('Ошибка: ', error.message);

        repos.forEach(repo => console.log(repo.name));
    });
}