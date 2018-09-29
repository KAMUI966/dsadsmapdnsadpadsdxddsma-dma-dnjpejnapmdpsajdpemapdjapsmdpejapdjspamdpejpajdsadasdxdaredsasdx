const discord = require("discord.js");
const ytdl = require("ytdl-core");
var play = require("./play.js");
var servers = play.servers;

module.exports.run = async (bot,message,args) => {
  var server = servers[message.guild.id];

  if(server.dispatcher) server.dispatcher.end();
  message.channel.send("Skipped :ok_hand:");

}
module.exports.help = {
  name: "skip"
}
