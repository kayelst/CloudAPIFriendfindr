Template.paypalCreditCardForm.events({
    'submit #paypal-payment-form': function(evt, tmp){
        evt.preventDefault();

        var card_data = Template.paypalCreditCardForm.card_data();

        Meteor.call("paypal", card_data, function (err, result) {
            if (result) Router.go('settings');
        })
    }
});