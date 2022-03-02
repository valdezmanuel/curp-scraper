const curpScraper = require('../dist/curp-scraper.js');

curpScraper.getCurpDetails('REPLACE THIS WITH A VALID CURP', (error, response) => {
    if (error) {
        console.log("error", error);
    } else {
        console.log("response", response);
    }   
})