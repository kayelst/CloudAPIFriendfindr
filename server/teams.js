Meteor.methods({
    'addTeam': function (name) {
        if (!name) return false;

        Teams.insert({teamName: name, members: [Meteor.userId()], owner: Meteor.userId()}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
            console.log("qdded" + teamName);
        });
    },
    'removeTeam': function (id) {
        Teams.remove({_id: id}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
            console.log("deleted" + id);
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
    'cancelInvite': function (teamId, playerId) {
        if (!teamId || !playerId) return false;

        Invites.updateOne({teamId: teamId, playerId: playerId}, {$set: {status: 'cancelled'}}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            return res == 1;
        });
    },
    'acceptInvite': function (teamId, playerId) {
        if (!teamId || !playerId) return false;

        Invites.updateOne({teamId: teamId, playerId: playerId}, {$set: {status: 'accepted'}}, function (err, res) {
            if (err) {
                console.error(err);
                return false
            }
            if (res == 1) {
                Teams.updateOne({_id: teamId}, { $addToSet: { members: playerId }}, function (err, res) {
                    if (err) {
                        console.error(err);
                        return false
                    }
                    return res == 1;
                });
            }
        });
    }
});