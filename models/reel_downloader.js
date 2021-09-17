const axios = require("axios");
const cheerio = require("cheerio");

async function instaReel(URL) {
  const { data } = await axios.get(URL, {
    headers: {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,en-IN;q=0.7",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
    },
  });
  let $ = cheerio.load(data);
  let script = $("script").eq(4).html();
  let {
    entry_data: {
      PostPage: {
        [0]: {
          graphql: {
            shortcode_media: { display_url, video_url },
          },
        },
      },
    },
  } = JSON.parse(/window\._sharedData = (.+);/g.exec(script)[1]);
  return { display_url, video_url };
}

module.exports = instaReel;
