'use strict';

const _RENAPO_API_URL = 'http://www.renapo.sep.gob.mx/wsrenapo/MainControllerParam';

exports.getCurpDetails = async function(curp, callback = () => {}) {
    if (!curp) {
        return callback(new Error('No CURP provided'));
    }
}

if (typeof window != 'undefined') {
    window.curpScraper = exports;
}