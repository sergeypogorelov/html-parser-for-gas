const $ = require('cheerio');

function getInstance() {
    return $;
}

global.getInstance = getInstance;
