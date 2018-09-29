const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#00fff2")
  .setTitle("Doggo :dog:")
  .setImage(body.url)
  .setFooter(`Requested by ${message.author.tag} at ${message.createdAt.toDateString()}`)

  message.channel.send(dogembed)
}

module.exports.help = {
    name: "dog"
}
