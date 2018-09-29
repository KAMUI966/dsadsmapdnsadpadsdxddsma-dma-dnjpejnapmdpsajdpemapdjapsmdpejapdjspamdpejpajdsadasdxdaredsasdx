const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async(bot,message,args) => {

  if(!message.guild.voiceConnection){
    message.guild.voiceConnection.join().then(connection => message.channel.send("Joined your channel :ok_hand:")).catch(e => message.channel.send("I can't join that channel."));
  }
  else message.channel.send("I'm already in a voice channel!");

}

module.exports.help = {
  name: "stop"
}
