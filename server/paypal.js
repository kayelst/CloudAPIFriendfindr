
if (Meteor.settings.paypal.clientId != null && Meteor.settings.paypal.secret != null) {
    console.log("Using Paypal settings:\nClientId: " + Meteor.settings.paypal.clientId + "\nSecret: " + Meteor.settings.paypal.secret);

    Meteor.Paypal.config({
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': Meteor.settings.paypal.clientId,
        'client_secret': Meteor.settings.paypal.secret
    });
}
else console.error("Paypal settings not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.");