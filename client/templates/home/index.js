/*
 * Created by Matthew on 28/03/2016.
 */
Playerslist = new Mongo.Collection('Players');

Template.homeIndex.events({
   'submit .registerForm': function(event) {
       event.preventDefault();
       Session.set("validSummonerName", false);
       Meteor.call("isValidSummonerName", event.target.summonerName.value.toLowerCase(), function (error, result) {
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
       			Meteor.user.insert({'Name':'Thesmoggy', 'LeagueID': result})

       		}
		});
  }
})

Template.registerHelper('validSummonerName',function(){
    return Session.get("validSummonerName");
});