/**
 * Created by Matthew on 25/04/2016.
 */

Template.settings.helpers({
    'radio_equals': function (x, y) {
        return (x === y) ? {checked: 'checked'} : null;
    }
});