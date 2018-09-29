const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  let choices = args;
  let echoices = choices.slice(0).join(" ");
  let choose = Math.floor((Math.random() * choices.length));

  let ce = new Discord.RichEmbed()
  .setAuthor(message.member.user.username + "'s choices", message.member.user.displayAvatarURL)
  .setColor("#00fff2")
  .addField("What he said", echoices)
  .addField("I choose", choices[choose]);

  message.channel.send(ce);

}

module.exports.help = {
  name: "choose"
}
