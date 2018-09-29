const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do this.");
  let botmsg = args.join(" ");
  message.channel.send(botmsg);
  message.delete(1);
}

module.exports.help = {
  name: "say"
}
