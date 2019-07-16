var execute = require("cordova/exec");

var honeywell = {
    softwareTriggerStart: function (res, err) {
        return execute(res, err, 'HoneywellScannerPlugin', 'softwareTriggerStart', []);
    },
    softwareTriggerStop: function () {
        return execute(null, null, 'HoneywellScannerPlugin', 'softwareTriggerStop', []);
    },
    nativeListen: function (res, err) {
        return execute(res, err, 'HoneywellScannerPlugin', 'listen', []);
    },
    listen: function (res, err) { // DEPRECATION WARNING: This will be removed in the next major release, use nativeListen
        return execute(res, err, 'HoneywellScannerPlugin', 'listen', []);
    },
    nativeRelease: function () {
        return execute(null, null, 'HoneywellScannerPlugin', 'release', []);
    },
    release: function () { // DEPRECATION WARNING: This will be removed in the next major release, use nativeRelease
        return execute(null, null, 'HoneywellScannerPlugin', 'release', []);
    },
    nativeClaim: function (res, err) {
        return execute(res, err, 'HoneywellScannerPlugin', 'claim', []);
    },
    claim: function (res, err) { // DEPRECATION WARNING: This will be removed in the next major release, use nativeRelease
        return execute(res, err, 'HoneywellScannerPlugin', 'claim', []);
    }
};

module.exports = honeywell;
