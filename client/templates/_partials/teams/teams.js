Template.homeTeams.events({
   'submit .teamsearching': function(event) {
       event.preventDefault();
       var choicebox = document.getElementById("server").value;
       var Name = document.getElementById("Name").value;
       var Language = document.getElementById("Language").value;
       var Microphone = document.getElementById("Microphone").value;
       console.log(choicebox);
       console.log(Name);
       console.log(Language);
       console.log(Microphone);
       Router.go('/players');
   }
});

Template.registerHelper('',function(){
    return Session.get("");
});

