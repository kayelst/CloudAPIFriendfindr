/*Template.homePlayers.helpers({
  'languageCheck': function (value1) {
    console.log(this);
    return value1 === this;
  }
})*/

Template.homePlayers.events({
   'submit .Playersearching': function(event) {
       event.preventDefault();
       var choicebox = document.getElementById("server").value;
       var Name = document.getElementById("Name").value;
       var Language = document.getElementById("Language").value;
       var Microphone = document.getElementById("Microphone").value;
       console.log(choicebox);
       console.log(Name);
       console.log(Language);
       console.log(Microphone);
   }
});

// dummy collection for testing purpose, living only in the client
// (not backed by a real server-side persistent collection)
Persons=new Mongo.Collection(null);

// dummy dataset
Persons.insert({
  name:"Alice",
  age:25
});
Persons.insert({
  name:"Bob",
  age:35
});
Persons.insert({
  name:"Charlie",
  age:18
});


Template.persons.helpers({
  // value of the filter to initialize the HTML input
  filter:function(){
    return Template.instance().filter.get();
  },
  // reactively return the persons who are older than the input value
  personsFiltered:function(){
    return Persons.find({
      age:{
        $gt:Template.instance().filter.get()
      }
    });
  }
});

// bind the value of the input to the underlying filter
Template.persons.events({
  "input .age":function(event,template){
    var currentValue=template.find(".age").valueAsNumber;
    template.filter.set(currentValue);
  }
});