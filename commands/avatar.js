const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let color = botconfig.color;

module.exports.run = async (bot,message,args) => {
  let aMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  let avembedargs2 = new Discord.RichEmbed()
  .setAuthor(`Your avatar`)
  .setColor(color)
  .setImage(`${message.author.avatarURL}`)
  .setFooter(`Requested by you`);

  if(!args[0]) return message.channel.send(avembedargs2);

  let avembedargs1 = new Discord.RichEmbed()
  .setAuthor(`${aMember.user.username}'s avatar`)
  .setColor(color)
  .setImage(`${aMember.user.avatarURL}`)
  .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(avembedargs1);



}

module.exports.help = {
  name: "avatar"
}
