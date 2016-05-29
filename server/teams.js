Meteor.methods({
    'addTeam': function (name) {
        Teams.insert({teamName: name, members: [Meteor.userId()], owner: Meteor.userId()})
    },
    'removeTeam': function (id) {
        Teams.delete({_id: id});
    },
    'invitePlayer': function (teamId, playerId) {
        Invites.insert({teamId: teamId, playerId: playerId, status: 'pending'});
    },
    'cancelInvite': function (teamId, playerId) {
        Invites.update({teamId: teamId, playerId: playerId},{ $set: { status: 'cancelled'}});
    },
    'acceptInvite': function (teamId, playerId) {
        Invites.update({teamId: teamId, playerId: playerId},{ $set: { status: 'accepted'}});
    }
});