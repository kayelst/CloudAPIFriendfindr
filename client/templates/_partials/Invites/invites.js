Template.homeInvites.helpers({
    'getTeamName': function (value) {
        if (!value) return true;

        var team = Teams.find({_id: value}, {fields: { 'teamName': true }}).fetch()[0];
        if (!team || !team.teamName) return false;
        return team.teamName;
    },
    'checkStatus': function(v1, v2) {
        if (!v1 || !v2) return false;
        return v1 === v2;
    }
});

Template.homeInvites.events({
    'click .AcceptInvite': function (event) {
        console.log("in accept");
        id = event.currentTarget.attributes["data-id"].value;
        Meteor.call("acceptInvite", id);
    },
    'click .DeclineInvite': function (event) {
        console.log("in decline");
        id = event.currentTarget.attributes["data-id"].value;
        Meteor.call("cancelInvite", id);
    }
});