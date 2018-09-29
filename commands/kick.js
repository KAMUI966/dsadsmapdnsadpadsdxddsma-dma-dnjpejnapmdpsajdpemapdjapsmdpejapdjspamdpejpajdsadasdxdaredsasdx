const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>{
    //s.kick @Snowman askin for it

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

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(21);
    if(!kReason) return message.channel.send("Specify a reason.");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let logs = message.guild.channels.find(`name`, config[message.guild.id].logs);

    message.guild.member(kUser).kick(kReason);

    if(config[message.guild.id].logsenable == "false") return;
    logs.send(kickEmbed);

    return;

  }

  module.exports.help = {

    name: "kick"

  }
