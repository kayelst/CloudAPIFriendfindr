/**
 * Created by Matthew on 28/03/2016.
 */



var checkIfLoggedIn = function () {
    if (!Meteor.user()) {
        Router.go('/');
    }
    this.next();
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "homeIndex",
    data: function () {
        return {
            teamsNotOwned: Teams.find({members: Meteor.userId(), owner: { $ne: Meteor.userId() }}).fetch(),
            teamsOwned: Teams.find({owner: Meteor.userId()}).fetch()
        }
    }
});

Router.route("/about", {
    name: "homeAbout"
});

Router.route("/teams", {
    name: "homeTeams",
    data: function () {
        return {teams: Teams.find().fetch()}
    },
    onBeforeAction: checkIfLoggedIn
});

Router.route("/players", {
    name: "homePlayers",
    data: function () {
        return { 
            players: Meteor.users.find({'profile.verified': true}).fetch(),
            teamsOwned: Teams.find({owner: Meteor.userId()}).fetch()
        }
    },
    onBeforeAction: checkIfLoggedIn
});

Router.route("/settings", {
    name: "settings",
    onBeforeAction: checkIfLoggedIn
});

Router.route("/premium", {
    name: "premium",
    onBeforeAction: checkIfLoggedIn
});

Router.route("/homeInvites", {
    name: "homeInvites",
    data: function() { return { invites: Invites.find({playerId: Meteor.user()}).fetch()} },
    onBeforeAction: checkIfLoggedIn
});