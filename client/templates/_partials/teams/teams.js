Template.homeTeams.events({
   'submit .Teamsearching': function(event) {
       event.preventDefault();
       Meteor.call("addTeam", TeamName.value);
   }
});

Template.homeTeams.events({
   'add .Playersearching': function(event) {
       event.preventDefault();
       Meteor.call("invitePlayer", teamId, playerId);
   }
})

