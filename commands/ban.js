const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>{

  let config = JSON.parse(fs.readFileSync("./sconfig.json", "utf8"));
  if(!config[message.guild.id]){
    config[message.guild.id] = {
      welcomemessage: "%member% joined the snow party!",
      leavemessage: "%member% left the snow party!",
      wlchannel: "",
      wlenable: "false",
      logs: "",
      logsenable: "false",
    };
    fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
      if (err) console.log(err)
    });
  }

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(21);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let logs = message.guild.channels.find(`name`, config[message.guild.id].logs);

    message.guild.member(bUser).ban(bReason);
    if(config[message.guild.id].logsenable == "false") return;
    logs.send(banEmbed);
    return;

  }

  module.exports.help = {

    name: "ban"

  }
