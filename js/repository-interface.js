var GitHubUsers = require('./../js/repository.js').repositoryModule;
var gitHubUsersObject = new GitHubUsers();

var displayAllRepositories = function(array) {
  $(".results").empty();
  array.forEach(function(item) {
    // if(item.description === null || item.description === "")
    // {
    //   $(".results").append("<li>" + item.name + " | No description was given.");
    // } else {
    //   $(".results").append("<li>" + item.name + " | " + item.description);
    // }
    console.log(item.name + " | " + item.description);
  });
};

var displayAvatar = function(response) {
  $(".avatar").append("<img src=https://avatars.githubusercontent.com/u/" + response.id + " alt='the entered GitHub users profile picture'>");
};

$(document).ready(function() {
  $("#user-lookup").submit(function(event) {
    event.preventDefault();
    var nameToLookUp = $("#user-name").val();
    console.log(nameToLookUp);
    gitHubUsersObject.getRepos(nameToLookUp, displayAllRepositories);
    gitHubUsersObject.getInfo(nameToLookUp, displayAvatar);

  });
  gitHubUsersObject.getRepos("JMDelight");
});
