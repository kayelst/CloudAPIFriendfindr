Template.homeTeams.events({
   'submit .Teamsearching': function(event) {
       event.preventDefault();
       Meteor.call("addTeam", TeamName.value);
   }
});

Template.homeTeams.events({
   'click #delete': function(event) {
       event.preventDefault();
       console.log("in delete");
       Session.get("TeamName");
       Meteor.call("removeTeam", tealID);
   }
});

Template.homeTeams.events({
   'add .Playersearching': function(event) {
       event.preventDefault();
       Meteor.call("invitePlayer", teamId, playerId);
   }
});

