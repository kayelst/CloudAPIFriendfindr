/**
 * Created by Matthew on 25/04/2016.
 */

Template.settings.helpers({
    'radio_equals': function (x, y) {
        return (x === y) ? {checked: 'checked'} : null;
    }
});
var ChosenMic;
var GenderString;

Template.MicCheck.events({
    'click :radio': function(event, template) {
        var element = template.find('input:radio[name=MicroCheck]:checked');
        console.log($(element).val());
        var MicString = $(element).val();
        if (Meteor.user().profile.microphone = true){
            document.getElementById("Server")
        }
        if (MicString == "false"){
            ChosenMic = false;
        }
        else if (MicString == "true") {
            ChosenMic = true;
        }

    }
});

Template.GenderCheck.events({
    'click :radio': function(event, template) {
        var element = template.find('input:radio[name=GenderCheck]:checked');
        console.log($(element).val());
        GenderString = $(element).val();

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
        
       Meteor.call("getUpdatedMic", function(){
           console.log("ChosenMic is " + ChosenMic);
           Meteor.users.update(Meteor.userId(), {$set: {"profile.microphone": ChosenMic}});
        });

        Meteor.call("getUpdatedGender", function(){
            console.log("GenderString is " + GenderString);
            Meteor.users.update(Meteor.userId(), {$set: {"profile.gender": GenderString}});
        });
    }
});

Template.settings.events({
    'click :Button': function(event){
        event.preventDefault();
        console.log("Checking");
        Session.set("validSummonerName", false);
        Meteor.call("isValidSummonerName", event.target.summonerName.value.toLowerCase(), function (error, result) {
            console.log(summonerName);
            if (result){
                Session.set("validSummonerName", true);
            }
            else Session.set("validSummonerName", false);
        });

        Meteor.call("getSummonerIDByName", event.target.summonerName.value.toLowerCase(), function(error, result) {
            console.log("went in function");
            if (error){
                console.log("Error getting summoner ID");
            }
            else {
                console.log("Succes!" + result);
                Meteor.user.save({'Name':summonerName, 'LeagueID': result})

            }
        });
    }
});