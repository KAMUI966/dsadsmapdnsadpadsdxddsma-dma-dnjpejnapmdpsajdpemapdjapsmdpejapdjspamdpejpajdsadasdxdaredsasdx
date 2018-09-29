const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.author.id]){
  prefixes[message.author.id] = {
    prefix: "s."
    };
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
  }
  let prefix = prefixes[message.guild.id].prefixes;
  //NORMAL HELP
  if(!args[0]){
    let help = new Discord.RichEmbed()
    .setAuthor("SnowBot's commands list")
    .setDescription("Prefix: `" + `${prefix}` + "`")
    .setColor("#00fff2")
    .addField("**❯ Core**", "`" + `${prefix}` + "help" + "`"+ ", " + "`" + `${prefix}` + "botinfo" + "`")
    .addField("**❯ Moderation**",  "`" + `${prefix}` + "addrole" + "`"+ ", " +  "`" + `${prefix}` + "ban" + "`"+ ", " +  "`" + `${prefix}` + "kick" + "`"+ ", " +  "`" + `${prefix}` + "purge" + "`"+ ", " +  "`" + `${prefix}` + "removerole" + "`"+ ", " +  "`" + `${prefix}` + "tempmute" + "`"+ ", " +  "`" + `${prefix}` + "warn" + "`"+ ", " +  "`" + `${prefix}` + "warnlevel" + "`")
    .addField("**❯ Utility**", "`" + `${prefix}` + "avatar" + "`"+ ", " + "`" + `${prefix}` + "level" + "`"+ ", " + "`" + `${prefix}` + "prefix" + "`"+ ", " + "`" + `${prefix}` + "report" + "`"+ ", " + "`" + `${prefix}` + "say" + "`"+ ", " + "`" + `${prefix}` + "serverinfo" + "`"+ ", " + "`" + `${prefix}` + "config" + "`" + ", " + "`" + `${prefix}` + "fortnite" + "`")
    .addField("**❯ Fun**", "`" + `${prefix}` + "8ball" + "`"+ ", " + "`" + `${prefix}` + "avatar" + "`"+ ", " + "`" + `${prefix}` + "cat" + "`"+ ", " + "`" + `${prefix}` + "coin" + "`"+ ", " + "`" + `${prefix}` + "insult" + "`"+ ", " + "`" + `${prefix}` + "rps" + "`" + ", " + "`" + `${prefix}` + "meme" + "`")
    .addField("**❯ Coins**", "`" + `${prefix}` + "coins" + "`"+ ", " + "`" + `${prefix}` + "fishy" + "`"+ ", " + "`" + `${prefix}` + "pay" + "`"+ ", " + "`" + `${prefix}` + "slots" + "`"+ ", " + "`" + `${prefix}` + "daily" + "`")
    .addField("**❯ Music**", "`" + `${prefix}` + "play" + "`"+ ", " + "`" + `${prefix}` + "join" + "`"+ ", " + "`" + `${prefix}` + "skip" + "`"+ ", " + "`" + `${prefix}` + "stop" + "`")
    .addField("**❯ NSFW**", "`" + `${prefix}` + "ass" + "`"+ ", " + "`" + `${prefix}` + "pussy" + "`"+ ", " + "`" + `${prefix}` + "porngif" + "`")
    .addField("**❯ For help on a certain command use**", "**s.help <command>**");
    message.channel.send(help);
  }
  //HELP COMMAND HELP
  if(args[0] == "help"){
    let helpc = new Discord.RichEmbed()
    .setAuthor("Help Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}help <command>`)
    .addField("Examples", [
      "`" + `${prefix}help` + "` displays a list of all the commands",
      "`" + `${prefix}help ban` + "` displays help for the ban command"
    ]);
    message.channel.send(helpc);
  }
  //BOTINFO COMMAND HELP
  if(args[0] == "botinfo"){
    let botinfoc = new Discord.RichEmbed()
    .setAuthor("Botinfo Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}botinfo`)
    .addField("Example", [
      "`" + `${prefix}botinfo` + "` displays information about the bot"
    ]);
    message.channel.send(botinfoc);
  }
  //ADDROLE COMMAND HELP
  if(args[0] == "addrole"){
    let addrolec = new Discord.RichEmbed()
    .setAuthor("Addrole Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}addrole <@name> <role>`)
    .addField("Example", [
      "`" + `${prefix}addrole @Snowman owner` + "` adds the role 'owner' to '@Snowman'."
    ]);
    message.channel.send(addrolec);
  }
  //BAN COMMAND HELP
  if(args[0] == "ban"){
    let banc = new Discord.RichEmbed()
    .setAuthor("Ban Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}ban <@name> <reason>`)
    .addField("Example", [
      "`" + `${prefix}ban @Snowman he was bad` + "` bans the user '@Snowman' with the reason",
      "'he was bad'."
    ]);
    message.channel.send(banc);
  }
  //KICK COMMAND HELP
  if(args[0] == "kick"){
    let kickc = new Discord.RichEmbed()
    .setAuthor("Kick Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}kick <@name> <reason>`)
    .addField("Example", [
      "`" + `${prefix}kick @Snowman he was bad` + "` kicks the user '@Snowman' with the reason",
      "'he was bad'."
    ]);
    message.channel.send(kickc);
  }
  //PURGE COMMAND HELP
  if(args[0] == "purge"){
    let purgec = new Discord.RichEmbed()
    .setAuthor("Purge Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}purge <messages>`)
    .addField("Example", [
      "`" + `${prefix}purge 10` + "` deletes the last 10 messages"
    ]);
    message.channel.send(purgec);
  }
  //REMOVEROLE COMMAND HELP
  if(args[0] == "purge"){
    let removerolec = new Discord.RichEmbed()
    .setAuthor("Removerole Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}removerole <@name> <role>`)
    .addField("Example", [
      "`" + `${prefix}removerole @Snowman owner` + "` removes the role 'owner' from '@Snowman'"
    ]);
    message.channel.send(removerolec);
  }
  //TEMPMUTE COMMAND HELP
  if(args[0] == "tempmute"){
    let tempmutec = new Discord.RichEmbed()
    .setAuthor("Tempmute Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}tempmute <@name> <time> <reason>`)
    .addField("Example", [
      "`" + `${prefix}tempmute @Snowman 10m he was bad` + "` mutes '@Snowman' for '10 minutes'",
      "with the reason 'he was bad'"
    ]);
    message.channel.send(tempmutec);
  }
  //WARN COMMAND HELP
  if(args[0] == "warn"){
    let warnc = new Discord.RichEmbed()
    .setAuthor("Warn Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}warn <@name> <reason>`)
    .addField("Example", [
      "`" + `${prefix}warn @Snowman he was bad` + "` warns '@Snowman' with the reason",
      "'he was bad'"
    ]);
    message.channel.send(warnc);
  }
  //WARNLEVEL COMMAND HELP
  if(args[0] == "warnlevel"){
    let warnlevelc = new Discord.RichEmbed()
    .setAuthor("Warnlevel Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}warnlevel <@name>`)
    .addField("Examples", [
      "`" + `${prefix}warnlevel` + "` display your own warn level",
      "`" + `${prefix}warnlevel @Snowman` + "` display @Snowman's warn level"
    ]);
    message.channel.send(warnlevelc);
  }
  //AVATAR COMMAND HELP
  if(args[0] == "avatar"){
    let avatarc = new Discord.RichEmbed()
    .setAuthor("Avatar Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}avatar <@name>`)
    .addField("Examples", [
      "`" + `${prefix}avatar` + "` display your own avatar",
      "`" + `${prefix}avatar @Snowman` + "` display @Snowman's avatar"
    ]);
    message.channel.send(avatarc);
  }
  //LEVEL COMMAND HELP
  if(args[0] == "level"){
    let levelc = new Discord.RichEmbed()
    .setAuthor("Level Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}level <@name>`)
    .addField("Examples", [
      "`" + `${prefix}level` + "` display your own level",
      "`" + `${prefix}level @Snowman` + "` display @Snowman's level"
    ]);
    message.channel.send(levelc);
  }
  //PREFIX COMMAND HELP
  if(args[0] == "prefix"){
    let prefixc = new Discord.RichEmbed()
    .setAuthor("Prefix Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}prefix <new prefix>`)
    .addField("Example", [
      "`" + `${prefix}prefix !` + "` sets the prefix to `!`"
    ]);
    message.channel.send(prefixc);
  }
  //REPORT COMMAND HELP
  if(args[0] == "prefix"){
    let reportc = new Discord.RichEmbed()
    .setAuthor("Report Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}report <@name> <reason>`)
    .addField("Example", [
      "`" + `${prefix}report @Snowman he was bad` + "` reports '@Snowman' with the reason",
      "'he was bad'"
    ]);
    message.channel.send(reportc);
  }
  //SAY COMMAND HELP
  if(args[0] == "say"){
    let sayc = new Discord.RichEmbed()
    .setAuthor("Say Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}say <string>`)
    .addField("Example", [
      "`" + `${prefix}say Hi!` + "` will make the bot say 'Hi!'"
    ]);
    message.channel.send(sayc);
  }
  //SERVERINFO COMMAND HELP
  if(args[0] == "serverinfo"){
    let serverinfoc = new Discord.RichEmbed()
    .setAuthor("Serverinfo Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}serverinfo`)
    .addField("Example", [
      "`" + `${prefix}serverinfo` + "` displays information about the server"
    ]);
    message.channel.send(serverinfoc);
  }
  //CONFIG COMMAND HELP
  if(args[0] == "config"){
    let configc = new Discord.RichEmbed()
    .setAuthor("Config Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}config <value>`)
    .addField("Values", [
      "`welcome-message <message>` sets the welcome message for new users",
      "`leave-message <message>` sets the leave message for users that left",
      "`welcome-leave-channel <channel>` sets the welcome/leave channel",
      "`welcome-leave-enable <true/false>` enables/disabled welcome/leave messages",
      "`logs-channel <channel>` sets the logs channel",
      "`logs-enable <true/false>` enables/disables logs"
    ])
    .addField("Variables", "`%member%` turns into the user's name")
    .addField("Example", [
      "`" + `${prefix}config welcome-message %member% joined the server.` + "`",
      "sets the welcome message to '@name joined the server.'"
    ]);
    message.channel.send(configc);
  }
  //8BALL COMMAND HELP
  if(args[0] == "8ball"){
    let ballc = new Discord.RichEmbed()
    .setAuthor("8ball Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}8ball <question>`)
    .addField("Example", [
      "`" + `${prefix}8ball Am i good?` + "` will make the bot answer the question",
      "'Am i good?'"
    ]);
    message.channel.send(ballc);
  }
  //CAT COMMAND HELP
  if(args[0] == "cat"){
    let catc = new Discord.RichEmbed()
    .setAuthor("Cat Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}cat`)
    .addField("Example", [
      "`" + `${prefix}cat` + "` displays a random image of a cat"
    ]);
    message.channel.send(catc);
  }
  //DOG COMMAND HELP
  if(args[0] == "dog"){
    let dog = new Discord.RichEmbed()
    .setAuthor("Dog Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}dog`)
    .addField("Example", [
      "`" + `${prefix}dog` + "` displays a random image of a dog"
    ]);
    message.channel.send(dogc);
  }
  //COIN COMMAND HELP
  if(args[0] == "cat"){
    let coinc = new Discord.RichEmbed()
    .setAuthor("Coin Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}coin`)
    .addField("Example", [
      "`" + `${prefix}coin` + "` displays a random part of a coin (tails, heads)"
    ]);
    message.channel.send(coinc);
  }
  //INSULT COMMAND HELP
  if(args[0] == "insult"){
    let insultc = new Discord.RichEmbed()
    .setAuthor("Insult Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}insult`)
    .addField("Example", [
      "`" + `${prefix}insult @Snowman` + "` insults @Snowman"
    ]);
    message.channel.send(insultc);
  }
  //RPS COMMAND HELP
  if(args[0] == "rps"){
    let rpsc = new Discord.RichEmbed()
    .setAuthor("Rps Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}rps <rock/paper/scissors>`)
    .addField("Example", [
      "`" + `${prefix}rps rock` + "` plays rps with the AI"
    ]);
    message.channel.send(rpsc);
  }
  //MEMES COMMAND HELP
  if(args[0] == "meme"){
    let memec = new Discord.RichEmbed()
    .setAuthor("Meme Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}meme`)
    .addField("Example", [
      "`" + `${prefix}meme` + "` displays a random meme"
    ]);
    message.channel.send(memec);
  }
  //MEMES COMMAND HELP
  if(args[0] == "coins"){
    let coinsc = new Discord.RichEmbed()
    .setAuthor("Coins Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}coins`)
    .addField("Example", [
      "`" + `${prefix}coins` + "` displays your current coins"
    ]);
    message.channel.send(coinsc);
  }
  //FISHY COMMAND HELP
  if(args[0] == "fishy"){
    let fishyc = new Discord.RichEmbed()
    .setAuthor("Fishy Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}fishy`)
    .addField("Example", [
      "`" + `${prefix}fishy` + "` go fishing and see what you get"
    ]);
    message.channel.send(fishyc);
  }
  //PAY COMMAND HELP
  if(args[0] == "pay"){
    let payc = new Discord.RichEmbed()
    .setAuthor("Pay Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}pay <@name> <coins>`)
    .addField("Example", [
      "`" + `${prefix}pay @Snowman 100` + "` give @snowman 100 coins"
    ]);
    message.channel.send(payc);
  }
  //SLOTS COMMAND HELP
  if(args[0] == "slots"){
    let slotsc = new Discord.RichEmbed()
    .setAuthor("Slots Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}slots`)
    .addField("Example", [
      "`" + `${prefix}slots` + "` a chance to win 500 coins."
    ]);
    message.channel.send(slotsc);
  }
  //FORTNITE COMMAND HELP
  if(args[0] == "fortnite"){
    let fortnitec = new Discord.RichEmbed()
    .setAuthor("Fortnite Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}fornite <Username> <pc/xbl/psn> <solo/duo/squad>`)
    .addField("Example", [
      "`" + `${prefix}fortnite Snowman pc solo` + "` displays stats of Snowman on pc on solo."
    ]);
    message.channel.send(fortnitec);
  }
  //ASS COMMAND HELP
  if(args[0] == "ass"){
    let assc = new Discord.RichEmbed()
    .setAuthor("Ass Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}ass`)
    .addField("Example", [
      "`" + `${prefix}ass` + "` displays a cute ass image."
    ]);
    message.channel.send(assc);
  }
  //PUSSY COMMAND HELP
  if(args[0] == "pussy"){
    let pussyc = new Discord.RichEmbed()
    .setAuthor("Pussy Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}pussy`)
    .addField("Example", [
      "`" + `${prefix}pussy` + "` displays a cute pussy image."
    ]);
    message.channel.send(pussyc);
  }
  //PORNGIF COMMAND HELP
  if(args[0] == "porngif"){
    let porngifc = new Discord.RichEmbed()
    .setAuthor("PornGIF Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}porngif`)
    .addField("Example", [
      "`" + `${prefix}porngif` + "` displays a porn gif image."
    ]);
    message.channel.send(porngifc);
  }
  //DAILY COMMAND HELP
  if(args[0] == "daily"){
    let dailyc = new Discord.RichEmbed()
    .setAuthor("Daily Command")
    .setColor("#00fff2")
    .addField("Usage", `${prefix}daily`)
    .addField("Example", [
      "`" + `${prefix}daily` + "` gives you 500 daily coins."
    ]);
    message.channel.send(dailyc);
  }
}

module.exports.help = {
  name: "help"
}
