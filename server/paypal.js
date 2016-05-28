
if (Meteor.settings.paypal.clientId != null && Meteor.settings.paypal.secret != null) {
    console.log("\nUsing League API key: " + Meteor.settings.leagueApiKey);

    Meteor.Paypal.config({
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': Meteor.settings.paypal.clientId,
        'client_secret': Meteor.settings.paypal.secret
    });
}
else console.error("Paypal settings not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.");