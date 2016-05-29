JsonRoutes.add("get", "/api/players", function (req, res, next) {
    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({}, {profile: 1}).fetch()
    });
});

JsonRoutes.add("get", "/api/players/premium", function (req, res, next) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({profile: {premium: true}}, {profile: 1}).fetch()
    });
});

JsonRoutes.add("get", "/api/players/:name", function (req, res, next) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({profile: {summonerName: name}}, {profile: 1}).fetch()
    });
});

JsonRoutes.add("get", "/api/teams", function (req, res, next) {
    JsonRoutes.sendResult(res, {
        data: Teams.find().fetch()
    });
});

JsonRoutes.add("get", "/api/teams/:name", function (req, res, next) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Teams.find({teamName: name}).fetch()
    });
});

JsonRoutes.add("get", "/api/invites/team/:id", function (req, res, next) {
    var id = req.params.id;

    JsonRoutes.sendResult(res, {
        data: Invites.find({teamId: id}).fetch()
    });
});

JsonRoutes.add("get", "/api/invites/player/:id", function (req, res, next) {
    var id = req.params.id;

    JsonRoutes.sendResult(res, {
        data: Invites.find({playerId: id}).fetch()
    });
});