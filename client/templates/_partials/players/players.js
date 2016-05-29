Template.homePlayers.helpers({
  'languageCheck': function (value) {
    console.log(value);
    if (!value || !Session.get("Language")) return true;
    return value.toLowerCase() === Session.get("Language").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'microphoneCheck': function (value) {
    console.log(value);
    if (value == undefined || Session.get("Microphone") == undefined) return true;
    console.log(Session.get("Microphone") + " | "  + value + " : " + (value == Session.get("Microphone")));
    return value == Session.get("Microphone");
  }
});

Template.homePlayers.helpers({
  'serverCheck': function (value) {
    console.log(value);
    if (!value || !Session.get("Server")) return true;
    return value.toLowerCase() === Session.get("Server").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'roleCheck': function (value) {
    console.log(value);
    if (!value || !Session.get("Role")) return true;
    return value.toLowerCase() === Session.get("Role").toLowerCase();
  }
});

Template.homePlayers.helpers({
  'nameCheck': function (value) {
    console.log(value);
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
       Session.set("Role", document.getElementById("Role").value);
   }
});

Template.homePlayers.events({
    'click .add': function(event) {
        event.preventDefault();
        teamId = document.getElementById('Teams').value;
        playerId = event.currentTarget.attributes["data-id"].value;
        Meteor.call("invitePlayer", teamId, playerId);
    }
});


