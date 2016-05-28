Template.homePlayers.helpers({
  'languageCheck': function (value1) {
    return value1.toLowerCase() === Session.get("Language").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'microphoneCheck': function (value1) {
    return value1.toLowerCase() === Session.get("Microphone").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'serverCheck': function (value1) {
    return value1.toLowerCase() === Session.get("Server").toLowerCase();
      console.log("value is " + value1)
  }
});

Template.homePlayers.helpers({
  'nameCheck': function (value1) {
    return value1.toLowerCase() === Session.get("Name").toLowerCase();
  }
});

Template.homePlayers.events({
   'submit .Playersearching': function(event) {
       event.preventDefault();
       Session.set("Name", document.getElementById("Name").value);
       Session.set("Microphone", document.getElementById("Microphone").value);
       Session.set("Language", document.getElementById("Language").value);
       Session.set("Server", document.getElementById("Server").value);
       //var choicebox = document.getElementById("server").value;
       //console.log(Server);
       //console.log(Name);
       /*console.log(Language);
       console.log(Microphone);*/
   }
});

