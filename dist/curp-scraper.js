'use strict';

const request = require('request');
const _RENAPO_API_URL = 'http://www.renapo.sep.gob.mx/wsrenapo/MainControllerParam';

exports.getCurpDetails = async function(curp, callback = () => {}) {
    if (!curp) {
        return callback(new Error('No CURP provided'));
    }

    const options = {
        url: _RENAPO_API_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            curp
        }
    }

    request(options, (error, response, body) => {
        if (error) {
            return callback(error);
        }
        // get all td > div elements
        const regex = /<td>?<div (align="left")?>(.*?)<\/div><\/td>/g;
        let match
        let matches = [];
        while ( match = regex.exec(body)) {
            matches = [...matches, match[2]];
        }
        // format response object
        if (matches && matches.length > 0) {
            const formattedResponse = {}
            for (let index = 0; index < matches.length; index+=2) {
                let currentElement = matches[index];
                currentElement = currentElement.replace(":", ""); // clear name
                formattedResponse[currentElement] = matches[index+1];
            }
            
            return callback(null, formattedResponse);
        }

        return callback(new Error('No data found'));

    });
}


if (typeof window != 'undefined') {
    window.curpScraper = exports;
}