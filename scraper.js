const fs = require('fs');

// Third-party imports
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://just.wigwag.me/api-docs';

axios
    .get(url)
    .then(res => {
        const html = res.data;
        const $ = cheerio.load(html);

        // Extract the text content of the whole page
        const content = $('body').text();

        console.log(`✅ ${content}`);

        // Save the content to a file
        fs.writeFile('wigwag-api-doc.txt', content, err => {
            if (err) throw err;
            console.log(`✅ Content saved to wigwag-api-doc.txt`);
        });
    })
    .catch(error => {
        console.error(`💥 ${error.message}`);
    });
