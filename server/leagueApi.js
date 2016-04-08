/**
 * Created by Matthew on 28/03/2016.
 */

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
            HTTP.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + name + "?api_key=" + Meteor.settings.leagueApiKey, function (err, res) {
                return err == null;
            });
        }
    });

}
else console.error("League API key not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.")