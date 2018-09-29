const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.channel.send("Couldn't find member");
  try{
    let wl = warns[wUser.id].warns;
    message.channel.send(`<@${wUser.id}> has ${wl} warnings.`);
  }catch(e){
    message.channel.send(`${wUser} has no warnings`);
  }



}

module.exports.help = {
  name: "warnlevel"
}
