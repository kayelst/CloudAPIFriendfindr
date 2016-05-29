/*
 * Created by Matthew on 28/03/2016.
 */

Template.homeIndex.events({
	'click .removeTeamButton': function(event) {
		Meteor.call('removeTeam', event.currentTarget.attributes["data-id"].value);
		return true;
	}
});

Template.homeIndex.helpers({
  'getSummonerName': function (value) {
    if (!value) return true;

      var user = (Meteor.users.find({_id: value}, {fields: { 'profile.summonerName': true }}).fetch())["0"];
    if (!user || !user.profile || !user.profile.summonerName) return false;

    return user.profile.summonerName;
  },
  'getSiteName': function (value) {
    if (!value) return true;
      var user = (Meteor.users.find({_id: value}, {fields: { 'profile.name': true }}).fetch())["0"];
      if (!user || !user.profile || !user.profile.name) return false;

    return user.profile.name;
  }
});