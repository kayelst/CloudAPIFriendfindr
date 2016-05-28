/**
 * Created by Matthew on 25/04/2016.
 */

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'displayName',
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
        fieldName: 'summonerName',
        fieldLabel: 'Summoner Name',
        inputType: 'text',
        visible: true
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
            value: 'f'
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
            value: 'euw'
        }, {
            id: 1,
            label: 'NA',
            value: 'na'
        }, {
            id: 2,
            label: 'EUNE',
            value: 'eune'
        }, {
            id: 3,
            label: 'TR',
            value: 'tr'
        }, {
            id: 4,
            label: 'LAN',
            value: 'lan'
        }, {
            id: 5,
            label: 'JAP',
            value: 'jap'
        }],
        visible: true
    }, {
        fieldName: 'role',
        fieldLabel: 'Role',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your main role',
        data: [{
            id: 0,
            label: 'ADC',
            value: 'adc'
        }, {
            id: 1,
            label: 'Mid',
            value: 'mid'
        }, {
            id: 2,
            label: 'Sup',
            value: 'sup'
        }, {
            id: 3,
            label: 'Top',
            value: 'top'
        }, {
            id: 4,
            label: 'Jungle',
            value: 'jgl'
        }],
        visible: true
    }, {
        fieldName: 'microphone',
        fieldLabel: 'Do you have a microphone?',
        inputType: 'checkbox',
        visible: true
    }, {
        fieldName: 'language',
        fieldLabel: 'Language',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your language',
        data: [{
            id: 0,
            label: 'English',
            value: 'english'
        }, {
            id: 1,
            label: 'Dutch',
            value: 'dutch'
        }, {
            id: 2,
            label: 'Spanish',
            value: 'spanish'
        }, {
            id: 3,
            label: 'German',
            value: 'german'
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