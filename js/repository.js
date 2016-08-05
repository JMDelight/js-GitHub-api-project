var apiKey = require('./../.env').apiKey;

function GitHubUsers() {
  this.repoPages = 0;
  this.currentPage = 0;
}

GitHubUsers.prototype.getInfo = function(username, displayFunction, retrievalFunction) {
  var self = this;
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    self.repoPages = Math.ceil(response.public_repos / 30);
    console.log("Number of repos=" + response.public_repos);
    console.log("Number of pages=" + self.repoPages);
    console.log(self.currentPage);
    displayFunction(response);
    retrievalFunction(username);
    // this.getRepos(username, getReposDisplayFunction);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

 // + '?page=' + self.currentPage
GitHubUsers.prototype.getRepos = function(username, displayFunction) {
  var self = this;
  console.log("CurrentPage=" + self.currentPage);
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&page=' + self.currentPage).then(function(response){

    displayFunction(response);
    if (self.currentPage <= self.repoPages) {
      self.currentPage ++;
      self.getRepos(username, displayFunction);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

GitHubUsers.prototype.GetRepositories = function(username) {

};

exports.repositoryModule = GitHubUsers;
