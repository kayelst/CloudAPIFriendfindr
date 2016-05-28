/**
 * Created by Matthew on 25/04/2016.
 */

Template.settings.helpers({
    'radio_equals': function (x, y) {
        return (x === y) ? {checked: 'checked'} : null;
    }
});

Template.MicCheck.events({
    'submit .settingsForm': function(event, template) {
        console.log("in michdjak;la")
        var element = template.find('input:radio[name=MicCheck]:checked');
        console.log($(element).val());
    }
});

Template.settings.events({
    'submit .settingsForm': function (event){
        //laat submit buttton niet doen wat hij normaal doet (page refreshen, ...)
        event.preventDefault();
        Meteor.call("getUpdatedServer", function() {
            Session.get("Server");
            Session.set("ChosenS", document.getElementById("Server").value);
            var ChosenServer = Session.get("ChosenS");
            console.log(ChosenServer);
            Meteor.users.update(Meteor.userId(), {$set: {"profile.server": ChosenServer}});
        });

       Meteor.call("getUpdatedRole", function() {
            Session.get("Role");
            Session.set("ChosenR", document.getElementById("Role").value);
            var ChosenRole = Session.get("ChosenR");
            console.log(ChosenRole);
            Meteor.users.update(Meteor.userId(), {$set: {"profile.role": ChosenRole}});
        });
    }
});