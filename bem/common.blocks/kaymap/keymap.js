modules.define('keymap', function (provide) {

    provide({
        keys: {},

        detect: function () {
            // always true for browser platform
            return true;
        },

        getNativeDUID: function () {
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                this.DUID = 'CHROMEISFINETOO';
            } else {
                this.DUID = 'FIREFOXISBEST';
            }
            return this.DUID;
        }
    });

});