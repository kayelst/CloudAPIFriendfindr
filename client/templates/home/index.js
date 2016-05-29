/*
 * Created by Matthew on 28/03/2016.
 */

Template.homeIndex.events({
	'click .removeTeamButton': function(event) {
		Meteor.call('removeTeam', event.currentTarget.attributes["data-id"].value);
		return true;
	}
})

Template.homeIndex.helpers({
  'getSummonerName': function (value) {
    if (!value) return true;
    return (Meteor.users.find({_id: value}, {fields: { 'profile.summonerName': true }}).fetch())["0"].profile.summonerName;
  },
  'getSiteName': function (value) {
    if (!value) return true;
    return (Meteor.users.find({_id: value}, {fields: { 'profile.name': true }}).fetch())["0"].profile.name;
  }
});