const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  //s.purge 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do this.");
  if(!args[0]) return message.channel.send("Specify how many lines to purge.");
  message.channel.bulkDelete(args[0]).then(() =>{
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
});
}

module.exports.help = {
  name: "purge"
}
