# curp-scraper
Scraper for RENAPO web page to extract CURP details.

# Installation
To use the scraper in your own nodejs projects:
```
$ npm install curp-scraper
```

# Example
```
    const curpScraper = require('curp-scraper');

    curpScraper.getCurpDetails('REPLACE THIS WITH A VALID CURP', (error, response) => {
        if (error) {
            console.log("error", error);
        } else {
            console.log("response", response);
            // resonse in the following format
            /**
            *  {
            *    Apellido1: 'TEST',
            *    Apellido2: 'TEST',
            *    CRIP: '',
            *    CveEntidadEmisora: '',
            *    CveEntidadNac: 'SL',
            *    CveMunicipioReg: '001',
            *    DocProbatorio: '1',
            *    FechNac: '10/10/1994',
            *    Foja: '',
            *    FolioCarta: '',
            *    Libro: '',
            *    Nacionalidad: 'MEX',
            *    Nombres: 'TEST',
            *    NumActa: '02171',
            *    NumEntidadReg: '22',
            *    NumRegExtranjeros: '',
            *    Sexo: 'H',
            *    StatusCurp: 'RCN',
            *    Tomo: ''
            *   }
            **/
        }   
    })
```

# License 
GNU General Public License v3.0