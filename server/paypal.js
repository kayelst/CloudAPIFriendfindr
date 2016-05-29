if (Meteor.settings.paypal && (Meteor.settings.paypal.clientId && Meteor.settings.paypal.secret)) {
    console.log("Using Paypal settings:\nClientId: " + Meteor.settings.paypal.clientId + "\nSecret: " + Meteor.settings.paypal.secret);

    Meteor.Paypal.config({
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': Meteor.settings.paypal.clientId,
        'client_secret': Meteor.settings.paypal.secret
    });

    Meteor.methods({
        'paypal': function (card_data) {
            var syncMethod = Meteor.wrapAsync(Meteor.Paypal.purchase);

            try {
                var result = syncMethod(card_data, {total: '2.00', currency: 'EUR'});
                if (result.saved) Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: {premium: true}}}, {upsert: true});
                return result.saved;
            }
            catch (ex) {
                console.error(ex);
                return false;
            }
            return true;
        }
    })
}
else console.error("Paypal settings not found, do you have a settings file named 'settings.json'? Start meteor with 'meteor run --settings settings.json' if you do.");