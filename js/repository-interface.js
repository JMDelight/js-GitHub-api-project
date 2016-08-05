var GitHubUsers = require('./../js/repository.js').repositoryModule;
var gitHubUsersObject = new GitHubUsers();

var displayAllRepositories = function(array) {
  console.log(array.length);
  array.forEach(function(item) {
    if(item.description === null || item.description === "")
    {
      $(".results").append("<li class='project'><a href='" + item.html_url + "'>" + item.name + "</a></li><ul><li>No description was given for this repository.</li><li>Created on- " + item.created_at.slice(0,10) + "</li></ul>");
    } else {
      $(".results").append("<li class='project'><a href='" + item.html_url + "'>" + item.name + "</a></li><ul><li>" + item.description + "</li><li>Created on- " + item.created_at.slice(0,10) + "</li></ul>");
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
  });
});
