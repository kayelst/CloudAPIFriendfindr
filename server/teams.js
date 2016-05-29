Meteor.methods({
    'addTeam': function (name) {
        Teams.insert({teamName: name, members: [Meteor.userId()], owner: Meteor.userId()})
    },
    'removeTeam': function (id) {
        Teams.delete({_id: id});
    }
});