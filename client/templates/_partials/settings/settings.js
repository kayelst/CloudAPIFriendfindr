/**
 * Created by Matthew on 25/04/2016.
 */

Template.settings.helpers({
    'equals': function (x, y) {
        return (x === y) ? 'true' : 'false';
    }
});

Template.settings.events({
    'submit .settingsForm': function (event, template) {
        event.preventDefault();
        var newProfile = {
                "profile.server": server.value,
                "profile.role": role.value,
                "profile.microphone": microphone.checked,
                "profile.gender": template.find('input:radio[name=gender]:checked').value,
                "profile.name": displayName.value
            };

        Meteor.call('updateUser', newProfile);
    },
    'click #verifyButton': function (event) {
        event.preventDefault();
        Meteor.call("verifyLeagueUser", document.getElementById('summonerName').value.toLowerCase());
    }
});