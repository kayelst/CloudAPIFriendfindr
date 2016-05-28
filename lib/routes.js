/**
 * Created by Matthew on 28/03/2016.
 */



var checkIfLoggedIn = function () {
    if (!Meteor.user()) {
        Router.go('/')
    }
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "homeIndex",
    data: function () {
        return {
            teams: [
                {
                    teamOwner: "Matthew",
                    teamName: "L33tsquad",
                    members: [
                        {
                            id: "0",
                            name: "Matthew"
                        },
                        {
                            id: "1",
                            name: "Kay"
                        },
                        {
                            id: "2",
                            name: "Arno"
                        },
                        {
                            id: "3",
                            name: "Joeri"
                        },
                        {
                            id: "4",
                            name: "Bryan"
                        }
                    ]
                }
            ]
        }
    }
});

Router.route("/about", {
    name: "homeAbout"
});

Router.route("/teams", {
    name: "homeTeams",
    onBeforeAction: checkIfLoggedIn
});

Router.route("/players", {
    name: "homePlayers",
    data: function () {
        return {players: PlayersList.find().fetch()}
    },
    onBeforeAction: checkIfLoggedIn
});

Router.route("/settings", {
    name: "settings",
    onBeforeAction: checkIfLoggedIn
});

Router.route("/subscription", {
    name: "paypal",
    onBeforeAction: checkIfLoggedIn
});