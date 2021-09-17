const bot = require("../routes/basicRoute");
const reelDownloader = require("../models/reel_downloader");

const basic_command = {
  async reelDownload(context) {
    const result = await reelDownloader(context.message.reply_to_message.text);
    const link = result.video_url;
    context.telegram.sendVideo(context.message.reply_to_message.chat.id, link);
  },
  async videoTutorial(context) {
    context.telegram.sendVideo(
      context.message.chat.id,
      "BAACAgUAAxkBAANSYURjZ-OwHV0htFyvqlV2Gs5aoEQAAkgCAAJDEilWxCk3TPrgVcUgBA"
    );
  },
  help(context) {
    context.reply(
      `HOW TO DOWNLOAD REELS :

1. copy the reel link 🔗 from instagram and paste here 
    and send it to the bot.
2. then swipe the link / press it or hold for a while the reply
3. type  "/download_reel" , reply back to link and send it✨
      
     or click on this /video_tutorial for video tutorial

NOTE: 
1. for now you only can download reels 
    and video posts 
    ig tv videos with >50mb cant be downloaded.

2. downloading facebook videos , instagram stories , 
    picture will added later . 
          
    according to developer's mood 😌
    `
    );
  },

  start(context) {
    let message = `hey ${context.from.first_name} 👋,\nhope you doing well 😇\nuse/click  ->  /help for more..`;
    context.reply(message);
  },

  info(context) {
    context.reply(
      `
bot is just for 👨‍🎓 educational purpose..
recently learing 👨‍💻 sever side using nodeJs
thought to build 🏗️ something useful.

source code - "https://github.com/narayann7/just-save-it.git" 

if any thing went wrong the type 
/error "with error messsage" 
and send

Never settle and keep learning

    `
    );
  },
  errorFun(c) {
    if (c.message.text == "/error")
      c.telegram.sendMessage(
        c.message.chat.id,
        ` like this -> " /error with some message" `
      );

    c.telegram.sendMessage(process.env.BOT_TOKEN_MAIN, c.message.text);
  },
};

module.exports = basic_command;
