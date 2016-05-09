/**
 * Created by Matthew on 28/03/2016.
 */

Template.homeIndex.events({
   'submit .registerForm': function(event) {
       event.preventDefault();
       Session.set("validSummonerName", false);
       Meteor.call("isValidSummonerName", event.target.summonerName.value.toLowerCase(), function (error, result) {
           if (result) Session.set("validSummonerName", true);
           else Session.set("validSummonerName", false);
       });
   }
});

Template.registerHelper('validSummonerName',function(){
    return Session.get("validSummonerName");
});
