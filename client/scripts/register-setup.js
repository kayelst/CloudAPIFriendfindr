/**
 * Created by Matthew on 25/04/2016.
 */

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'displayname',
        fieldLabel: 'Display Name',
        inputType: 'text',
        visible: true,
        validate: function (value, errorFunction) {
            if (!value) {
                errorFunction("Please write your username");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'summoner-name',
        fieldLabel: 'Summoner Name',
        inputType: 'text',
        visible: true,
        validate: function (value, errorFunction) {

            var syncMethod = Meteor.wrapAsync(Meteor.call);
            try {
                var result = syncMethod('isValidSummonerName', value);
                return result;
            }
            catch (ex) {
                errorFunction("123");
                return false;
            }
        }
    }, {
        fieldName: 'gender',
        showFieldLabel: false,
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',
        data: [{
            id: 0,
            label: 'Male',
            value: 'm',
            checked: 'checked'
        }, {
            id: 1,
            label: 'Female',
            value: 'f',

        }],
        visible: true
    }, {
        fieldName: 'server',
        fieldLabel: 'Server',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your server',
        data: [{
            id: 0,
            label: 'EUW',
            value: 'EUW'
        }, {
            id: 1,
            label: 'NA',
            value: 'NA',
        }, {
            id: 2,
            label: 'EUNE',
            value: 'EUNE',
        }, {
            id: 2,
            label: 'TR',
            value: 'TR',
        }, {
            id: 4,
            label: 'LAN',
            value: 'LAN',
        }, {
            id: 5,
            label: 'JAP',
            value: 'JAP',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function (value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});