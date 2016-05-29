Template.homeTeams.events({
   'submit .Teamsearching': function(event) {
       event.preventDefault();
       Meteor.call("addTeam", TeamName.value);
   }
});