const discord = require("discord.js");
const ytdl = require("ytdl-core");
var play = require("./play.js");
var servers = play.servers;
var connection = play.connection;

module.exports.run = async(bot,message,args) => {
  var server = servers[message.guild.id];

  if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
  message.channel.send("Left the channel, erased the queue and stopped the music.");

}

module.exports.help = {
  name: "stop"
}
