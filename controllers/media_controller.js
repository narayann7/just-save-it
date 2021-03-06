const bot = require("../routes/basicRoute");
const reelDownloader = require("../models/reel_downloader");

const basic_command = {
  async reelDownload(context) {
    // try {
  
  
        const result = await reelDownloader(
          context.message.reply_to_message.text
        );

        const link = result.video_url;
        context.telegram.sendChatAction(
          context.message.reply_to_message.chat.id,
          "upload_video"
        );
        context.telegram.sendVideo(
          context.message.reply_to_message.chat.id,
          link
        );


        // console.log(link);
        console.log(   context.message.reply_to_message.text);
      
    // } catch (error) {
    //   if (context.message.reply_to_message == undefined)
    //     context.telegram.sendMessage(
    //       context.message.chat.id,
    //       `only "/download_reel"  command will not work\n\nclick -> /video_tutorial for tutorial
    //      `
    //     );
    //   else
    //     context.telegram.sendMessage(
    //       context.message.reply_to_message.chat.id,
    //       "Sorry , link may be invalid or something went wrong π­ "
    //     );
    // }
  },
  async videoTutorial(context) {
    context.telegram.sendVideo(
      context.message.chat.id,
      "BAACAgUAAxkBAAIBhmFEukyUVg-pEbu49d-TwbX4cxciAAL3AwACeskoVgv9suvZcwrHIAQ"
    );
  },
  help(context) {
    context.reply(
      `HOW TO DOWNLOAD REELS :

click on this /video_tutorial for video tutorial


1. copy the reel link π from instagram and paste here 
    and send it to the bot.

2. then swipe the link or press it or hold for a while then

3. type  "/download_reel" , reply back to link and send itβ¨
      

NOTE: 

1. for now you only can download reels 
    and video posts 
    ig tv videos with >50mb and 
    reels from private account cant be downloaded.

2. downloading facebook videos , instagram stories , 
    picture will added later . 
          
    according to developer's mood π
    `
    );
  },

  start(context) {
    let message = `hey ${context.from.first_name} π,\nhope you doing well π\nclick  ->  /help for more info and how to use this bot..`;
    context.reply(message);
  },

  info(context) {
    context.reply(
      `
bot is just for π¨βπ educational purpose..
recently learing π¨βπ» Server-side programming using nodeJs
thought to build ποΈ something useful.

hope you like it π

source code - "https://github.com/narayann7/just-save-it.git" 

if any thing went wrong then type 
/error "with error messsage" 
and send

want to contact,  ping -> @skillZ6

Never settle and keep learning!!

......................


    `
    );
  },
  errorFun(c) {
    if (c.message.text == "/error")
      c.telegram.sendMessage(
        c.message.chat.id,
        ` send like this -> " /error with some message" `
      );
    else c.telegram.sendMessage(process.env.BOT_TOKEN_MAIN, c.message.text);
  },
};

module.exports = basic_command;
