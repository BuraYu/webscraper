// const cherrio = require("cheerio");
const axios = require("axios");
// const fs = require("node:fs");
// const beautify = require("js-beautify");

async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);

    // const formattedHtml = beautify(data, {
    //   indent_size: 2,
    //   space_in_empty_paren: true,
    // });

    // fs.writeFile(
    //   "/home/buriburi/Projects/webscraper/backend/test.txt",
    //   formattedHtml,
    //   (err) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log("file written succesfully");
    //     }
    //   }
    // );
    
  } catch (error) {
    console.error("error scraping", error);
  }
}

scrapeWebsite("http://google.com");
