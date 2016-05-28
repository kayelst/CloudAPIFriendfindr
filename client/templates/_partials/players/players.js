Template.homePlayers.helpers({
  'languageCheck': function (value) {
    if (!value || !Session.get("Language")) return true;
    return value.toLowerCase() === Session.get("Language").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'microphoneCheck': function (value) {
    if (value == undefined || Session.get("Microphone") == undefined) return true;
    console.log(Session.get("Microphone") + " | "  + value + " : " + (value == Session.get("Microphone")));
    return value == Session.get("Microphone");
  }
});

Template.homePlayers.helpers({
<<<<<<< Updated upstream
  'serverCheck': function (value1) {
    return value1.toLowerCase() === Session.get("Server").toLowerCase();
      console.log("value is " + value1)
=======
  'serverCheck': function (value) {
    if (!value || !Session.get("Server")) return true;
    return value.toLowerCase() === Session.get("Server").toLowerCase();
>>>>>>> Stashed changes
  }
});

Template.homePlayers.helpers({
  'nameCheck': function (value) {
    if (!value || !Session.get("Name")) return true;
    return value.toLowerCase() === Session.get("Name").toLowerCase();
  }
});

Template.homePlayers.events({
   'submit .Playersearching': function(event) {
       event.preventDefault();
       Session.set("Name", Name.value);
       Session.set("Microphone", Microphone.checked);
       Session.set("Language", document.getElementById("Language").value);
       Session.set("Server", document.getElementById("Server").value);
<<<<<<< Updated upstream
       //var choicebox = document.getElementById("server").value;
       //console.log(Server);
       //console.log(Name);
       /*console.log(Language);
       console.log(Microphone);*/
=======
>>>>>>> Stashed changes
   }
});


