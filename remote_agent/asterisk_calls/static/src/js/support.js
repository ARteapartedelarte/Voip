odoo.define('asterisk_calls.support', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');

    var Support = AbstractAction.extend({
        template: 'asterisk_calls.support',

        init: function (parent, action) {
            this._super.apply(this, arguments);
        },

    });

    core.action_registry.add('asterisk_calls.support', Support);
});

odoo.define('asterisk_calls.addons', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');

    var Addons = AbstractAction.extend({
        template: 'asterisk_calls.addons',

        init: function (parent, action) {
            this._super.apply(this, arguments);
        },

    });

    core.action_registry.add('asterisk_calls.addons', Addons);
});



