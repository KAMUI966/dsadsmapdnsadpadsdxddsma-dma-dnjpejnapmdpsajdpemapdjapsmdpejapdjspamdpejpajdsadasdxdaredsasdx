const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You can't do that");
  if(!args[0] || args[0 == "help"]) return message.channel.send(`Usage: ${prefix}prefix <new prefix>`);
  prefixes[message.guild.id] = {
    prefixes: args[0]
    };
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`);
    message.channel.send(sEmbed);
  }
  module.exports.help = {
    name: "prefix"
  }
