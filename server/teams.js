Meteor.methods({
    'addTeam': function (name) {
        if (!name) return false;

        Teams.insert({teamName: name, members: [Meteor.userId()], owner: Meteor.userId()}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
        });
    },
    'removeTeam': function (id) {
        if (!id) return false;

        Teams.remove({_id: id}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
        });
    },
    'invitePlayer': function (teamId, playerId) {
        if (!teamId || !playerId) return false;

        Invites.insert({teamId: teamId, playerId: playerId, status: 'pending'}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
        });
    },
    'cancelInvite': function (id) {
        if (!id) return false;

        var doc = Invites.find({_id: id}).fetch();

        if (doc[0]) {
            Invites.update({_id: id}, {$set: {status: 'cancelled'}}, function (errInviteUpdate, resInviteUpdate) {
                if (errInviteUpdate) {
                    console.error(errInviteUpdate);
                    return false
                }

                return resInviteUpdate == 1;
            });
        }
    },
    'acceptInvite': function (id) {
        if (!id) return false;

        var doc = Invites.find({_id: id}).fetch();

        if (doc[0]) {
            Invites.update({_id: id}, {$set: {status: 'accepted'}}, function (errInviteUpdate, resInviteUpdate) {
                if (errInviteUpdate) {
                    console.error(errInviteUpdate);
                    return false
                }

                if (resInviteUpdate == 1) {
                    Teams.update({_id: doc[0].teamId}, {$addToSet: {members: doc[0].playerId}}, function (errTeamUpdate, resTeamUpdate) {
                        if (errTeamUpdate) {
                            console.error(errTeamUpdate);
                            return false
                        }

                        return resTeamUpdate == 1;
                    });
                }
            });
        }
    }
});