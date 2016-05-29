/**
 * Created by Matthew on 28/03/2016.
 */
Playerslist = new Mongo.Collection('Players');

if (Meteor.settings.leagueApiKey != null) {
    console.log("\nUsing League API key: " + Meteor.settings.leagueApiKey);

    Meteor.methods({
        'verifyLeagueUser': function (name) {
            this.unblock();
            var syncMethod = Meteor.wrapAsync(HTTP.get);
            try {
                var result = syncMethod("https://" + Meteor.user().profile.server + ".api.pvp.net/api/lol/" + Meteor.user().profile.server + "/v1.4/summoner/by-name/" + name + "?api_key=" + Meteor.settings.leagueApiKey).data;
                var tier = syncMethod("https://" + Meteor.user().profile.server + ".api.pvp.net/api/lol/" + Meteor.user().profile.server + "/v2.5/league/by-summoner/" + result[name].id + "/entry?api_key=" + Meteor.settings.leagueApiKey).data[result[name].id][0].tier;

                console.log(result);
                console.log(tier);

                Meteor.users.update(Meteor.userId(), {
                    $set: {
                        "profile.summonerName": result[name].name,
                        "profile.tier": tier,
                        "profile.verified": true
                    }
                }, function (err, res) {
                    console.error(err);
                    console.log(res);
                });

                return true;
            }
            catch (ex) {
                console.error(ex);
                return false;
            }
        },
        'updateUser': function (newProfile) {
            Meteor.users.update(Meteor.userId(), {$set: newProfile}, {upsert: true});
            return true;
        }
    });
}
else console.error("League API key not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.");