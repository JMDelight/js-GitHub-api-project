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

GitHubUsers.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(JSON.stringify(response));
    response.forEach(function(item) {
      console.log(item.name + " | " + item.description);
    });
    console.log(response);
    displayFunction(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

GitHubUsers.prototype.getAvatar = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    // 'https://avatars.githubusercontent.com/u/' + response.id
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repositoryModule = GitHubUsers;
