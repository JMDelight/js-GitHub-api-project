var apiKey = require('./../.env').apiKey;


function GitHubUsers() {

}

GitHubUsers.prototype.getInfo = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

GitHubUsers.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(JSON.stringify(response));
    response.forEach(function(item) {
      console.log(item.name);
    });
    // console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repositoryModule = GitHubUsers;
