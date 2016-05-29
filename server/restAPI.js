JsonRoutes.add("get", "/api/players", function (req, res) {
    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({}, { fields: {profile: true}}).fetch()
    });
});

JsonRoutes.add("get", "/api/players/premium", function (req, res) {
    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({profile: {premium: true}}, { fields: {profile: true}}).fetch()
    });
});

JsonRoutes.add("get", "/api/players/:name", function (req, res) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({profile: {summonerName: name}}, { fields: { profile: true}}).fetch()
    });
});

JsonRoutes.add("get", "/api/teams", function (req, res) {
    JsonRoutes.sendResult(res, {
        data: Teams.find().fetch()
    });
});

JsonRoutes.add("get", "/api/teams/:name", function (req, res) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Teams.find({teamName: name}).fetch()
    });
});

JsonRoutes.add("get", "/api/invites", function (req, res) {
    JsonRoutes.sendResult(res, {
        data: Invites.find().fetch()
    });
});

JsonRoutes.add("get", "/api/invites/team/:id", function (req, res) {
    var id = req.params.id;

    JsonRoutes.sendResult(res, {
        data: Invites.find({teamId: id}).fetch()
    });
});

JsonRoutes.add("get", "/api/invites/player/:id", function (req, res) {
    var id = req.params.id;

    JsonRoutes.sendResult(res, {
        data: Invites.find({playerId: id}).fetch()
    });
});

JsonRoutes.add("post", "/api/invites", function (req, res) {
    var body = req.body;

    if (!body || !body.teamId || !body.playerId) {
        JsonRoutes.sendResult(res, {
            data: { 'Error': 'Missing parameters' },
            code: 401
        });
    }

    Invites.insert({teamId: body.teamId, playerId: body.playerId}, function(err, id) {
        if (err) {
            JsonRoutes.sendResult(res, {
                data: err,
                code: 401
            });
        }

        JsonRoutes.sendResult(res, {
            data: Invites.find({_id: id}).fetch(),
            code: 201
        });
    });
});

JsonRoutes.add("delete", "/api/invites", function (req, res) {
    var body = req.body;

    if (!body || !body.id) {
        JsonRoutes.sendResult(res, {
            data: { 'Error': 'Missing parameters' },
            code: 401
        });
    }

    Invites.remove({_id: body.id}, function(err, amt) {
        if (err) {
            JsonRoutes.sendResult(res, {
                data: err,
                code: 401
            });
        }

        JsonRoutes.sendResult(res, {
            data: amt,
            code: 201
        });
    });
});