/*
 * Created by Matthew on 28/03/2016.
 */
import {Template} from 'meteor/templating';
import {Playerslist} from '.../lib/collections/players.js';
//Playerslist = new Mongo.Collection('Players');

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
       			Players.insert({
       				"leagueID" : result
       			});

       		}
		});
   	}
});

Template.homeIndex.events({
  'input #LeagueID' :function LeagueIDHandler(evt, template){
    let LID = template.find('#LeagueID').value;
    Playerslist.insert({'Name':'Thesmoggy', 'LeagueID': LID})
    console(LID);
  }
})

Template.registerHelper('validSummonerName',function(){
    return Session.get("validSummonerName");
});