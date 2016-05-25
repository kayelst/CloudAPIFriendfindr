/**
 * Created by Matthew on 28/03/2016.
 */
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
});

Router.route("/players", {
    name: "homePlayers",
    data: function () {
        return { players: PlayersList.find().fetch() }
    }
});

Router.route("/settings", {
    name: "settings"
});
