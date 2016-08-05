var GitHubUsers = require('./../js/repository.js').repositoryModule;
var gitHubUsersObject = new GitHubUsers();

var displayAllRepositories = function(array) {
  console.log(array.length);
  array.forEach(function(item) {
    if(item.description === null || item.description === "")
    {
      $(".results").append("<li>" + item.name + " | No description was given for this repository.");
    } else {
      $(".results").append("<li>" + item.name + " | " + item.description);
    }
  });
};

var displayAvatar = function(response) {
  $(".avatar").append("<img src=https://avatars.githubusercontent.com/u/" + response.id + " alt='the entered GitHub users profile picture' width=200>");
};

var getRepositories = function(username) {
  console.log(gitHubUsersObject.currentPage);
  gitHubUsersObject.getRepos(username, displayAllRepositories);
};

$(document).ready(function() {
  $("#user-lookup").submit(function(event) {
    event.preventDefault();
    $(".results").empty();
    $(".avatar").empty();
    var nameToLookUp = $("#user-name").val();
    gitHubUsersObject.currentPage = 1;
    gitHubUsersObject.getInfo(nameToLookUp, displayAvatar, getRepositories);
    // gitHubUsersObject.getRepos(nameToLookUp, displayAllRepositories);
  });
});
