const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

  const VC = message.guild.channels.filter(c=>c.type=="voice")
  const TC = message.guild.channels.filter(c=>c.type=="text")
  const BN = message.guild.members.filter(m=>m.user.bot)
  const HN = message.guild.members.filter(m=>!m.user.bot)
  var roles = message.guild.roles.map(role=>role.name);
  roles = roles.join(" , ").replace(`, /@/g `, ', @\u200b ');
    let sicon = message.guild.iconURL;

    let serverembed = new Discord.RichEmbed()

    .setAuthor(`Server information ❯ ${message.guild.name}`, sicon)

    .setColor("#00fff2")

    .setThumbnail(sicon)

    .addField("**❯ Channels**",[
          `**Text:** ${TC.size}`,
          `**Voice:** ${VC.size}`,
    ],true)


    .addField("**❯ Members**",
    [
          `**Total:** ${message.guild.memberCount}`,
          `**Humans:** ${HN.size}`,
          `**Bots:** ${BN.size}`,

    ],true)

    .addField("**❯ Server**",
    [
          `**Owner:** ${message.guild.owner.user.tag}`,
          `**Creation Date:** ${message.guild.createdAt.toDateString()}`,
          `**Region:** ${message.guild.region}`,
          `** ** `,
    ],true)

    .addField(`**❯ Roles** [${message.guild.roles.size}]`,
  [
          `**Roles:** ` + `${roles.split(", ")}`,
  ],true)

    return message.channel.send(serverembed);

}

module.exports.help = {

  name: "serverinfo"

}
