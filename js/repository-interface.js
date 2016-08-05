var GitHubUsers = require('./../js/repository.js').repositoryModule;
var gitHubUsers = new GitHubUsers();

$(document).ready(function() {
  gitHubUsers.getRepos("JMDelight");
});
