Template.homeTeams.events({
   'submit .teamsearching': function(event) {
       event.preventDefault();
       var Name = document.getElementById("Name").value;
       Router.go('/players');
   }
});

Template.registerHelper('',function(){
    return Session.get("");
});

