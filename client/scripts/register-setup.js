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
            value: 'EUW'
        }, {
            id: 1,
            label: 'NA',
            value: 'NA'
        }, {
            id: 2,
            label: 'EUNE',
            value: 'EUNE'
        }, {
            id: 3,
            label: 'TR',
            value: 'TR'
        }, {
            id: 4,
            label: 'LAN',
            value: 'LAN'
        }, {
            id: 5,
            label: 'JAP',
            value: 'JAP'
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
            value: 'ADC'
        }, {
            id: 1,
            label: 'Mid',
            value: 'MID'
        }, {
            id: 2,
            label: 'Sup',
            value: 'SUP'
        }, {
            id: 3,
            label: 'Top',
            value: 'TOP'
        }, {
            id: 4,
            label: 'Jungle',
            value: 'JGL'
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
            value: 'English'
        }, {
            id: 1,
            label: 'Dutch',
            value: 'Dutch'
        }, {
            id: 2,
            label: 'Spanish',
            value: 'Spanish'
        }, {
            id: 3,
            label: 'German',
            value: 'German'
        }],
        visible: true
    }]
});