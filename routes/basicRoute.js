const { Composer } = require("micro-bot");
const bot = new Composer();
const controllers = require("../controllers/media_controller");

// bot.use((context, next) => {
//   console.log(context.message);
//   next(context);
// });

bot.command("error", controllers.errorFun);
bot.command("info", controllers.info);
bot.command("video_tutorial", controllers.videoTutorial);
bot.help(controllers.help);
bot.command("download_reel", controllers.reelDownload);
bot.start(controllers.start);

module.exports = bot;
