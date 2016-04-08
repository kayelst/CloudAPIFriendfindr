/**
 * Created by Matthew on 28/03/2016.
 */

Template.homeIndex.events({
   'submit .registerForm': function(event) {
       event.preventDefault();
       Session.set("validSummonerName", false);
       Meteor.call("isValidSummonerName", event.target.summonerName.value.toLowerCase());
   }
});

Template.registerHelper('validSummonerName',function(){
    return Session.get("validSummonerName");
});