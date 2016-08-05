var GitHubUsers = require('./../js/repository.js').repositoryModule;
var gitHubUsers = new GitHubUsers();

var displayAllRepositories = function(array) {
  $(".results").empty();
  array.forEach(function(item) {
    $(".results").append("<li>" + item.name + " | " + item.description);
    console.log(item.name + " | " + item.description);
  });
};

$(document).ready(function() {
  $("#user-lookup").submit(function(event) {
    event.preventDefault();
    var nameToLookUp = $("#user-name").val();
    console.log(nameToLookUp);
    gitHubUsers.getRepos(nameToLookUp, displayAllRepositories);
  });
  gitHubUsers.getRepos("JMDelight");
});
