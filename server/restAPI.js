JsonRoutes.add("get", "/players", function (req, res, next) {
    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({}).fetch()
    });
});

JsonRoutes.add("get", "/teams", function (req, res, next) {
    JsonRoutes.sendResult(res, {
        data: Teams.find().fetch()
    });
});

JsonRoutes.add("get", "/players/:name", function (req, res, next) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Meteor.users.find({ profile: { summonerName: name }}).fetch()
    });
});

JsonRoutes.add("get", "/teams/:name", function (req, res, next) {
    var name = req.params.name;

    JsonRoutes.sendResult(res, {
        data: Teams.find({ teamName: name }).fetch()
    });
});