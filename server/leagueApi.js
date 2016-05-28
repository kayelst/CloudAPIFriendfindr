/**
 * Created by Matthew on 28/03/2016.
 */
Playerslist = new Mongo.Collection('Players');

if (Meteor.settings.leagueApiKey != null) {
    console.log("\nUsing League API key: " + Meteor.settings.leagueApiKey);

    Meteor.methods({
        'getTierByID': function (id) {
            this.unblock();
            return HTTP.get("https://euw.api.pvp.net/api/lol/euw/v2.5/league-by-summoner/" + id + "/entry?api_key=" + Meteor.settings.leagueApiKey).data;
        },
        'getTierBySummonerName': function (name) {
            this.unblock();
            return HTTP.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + name + "?api_key=" + Meteor.settings.leagueApiKey).data[name].id;
        },
        'isValidSummonerName': function (name) {
            this.unblock();
            var syncMethod = Meteor.wrapAsync(HTTP.get);
            try {
                var result = syncMethod("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + name + "?api_key=" + Meteor.settings.leagueApiKey);
                return true;
            }
            catch (ex) {
                return false;
            }
        },
        'getSummonerIDByName': function (name) {
            //Kan dan nog meerdere dingen doen tijdens de call, zodat als deze delayed is dat de website nog wel werkt.
            this.unblock();
            return HTTP.get("https://euw.api.pvp.net/api/lol/EUW/v1.4/summoner/by-name/" + name + "?api_key="+ Meteor.settings.leagueApiKey).data[name].id;
        }
    });
}
else console.error("League API key not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.");