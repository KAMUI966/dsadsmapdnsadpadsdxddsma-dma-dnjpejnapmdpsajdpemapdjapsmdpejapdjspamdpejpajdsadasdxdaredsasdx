const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#00fff2")
  .setTitle("Kitty :cat:")
  .setImage(body.file)
  .setFooter(`Requested by ${message.author.tag} at ${message.createdAt.toDateString()}`)

  message.channel.send(catembed)
}

module.exports.help = {
    name: "cat"
}
