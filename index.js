const client = require('cheerio-httpcli');

client.fetch('https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E5%B0%8F%E8%AA%AC%E5%AE%B6%E4%B8%80%E8%A6%A7', (err, $, res) => {
  $('.mw-parser-output > ul > li').each(function(i) {
    if (i > 30) return;
    console.log($(this).find('a').text());
  });
});
