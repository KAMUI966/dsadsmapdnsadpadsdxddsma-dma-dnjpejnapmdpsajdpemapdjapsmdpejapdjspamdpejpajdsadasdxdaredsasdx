const discord = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyDGS4m_qyOig6rPM3mn-0EGgBf9_b-VSIU');

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], { quality: 'highestaudio', filter: 'audioonly' }));

  ytdl.getInfo(server.queue[0], (err, info) => {
    if (err) throw err;
      message.channel.send(`**${info.title}** will now play.`);
  });

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if(server.queue[0]){
      play(connection, message);
    }
    else connection.disconnect();
  });
}

var servers = {};
exports.servers = servers;

module.exports.run = async(bot,message,args) => {
  if(!args[0]) {
    message.channel.send("Please provide a link or type something to search.");
    return;
  }

  if(!message.member.voiceChannel) {
    message.channel.send("You must be in a voice channel.");
    return;
  }
  if(!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };

  var server = servers[message.guild.id];

if(!args[0].includes("youtube") && !args[0].includes("https://")){
youtube.searchVideos(`${args}`, 5)
    .then(results => {
      message.channel.send(`Choose a song from this list(Just type the letter below)\n1. **${results[0].title}**\n2. **${results[1].title}**\n3. **${results[2].title}**\n4. **${results[3].title}**\n5. **${results[4].title}**`);
      result = results;
    })
    .catch(console.log);
} else {
  server.queue.push(args[0]);
}
        if(!args[0].includes("youtube") && !args[0].includes("https://")){
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 6, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
          const videoIndex = parseInt(response.first().content);
          const numar = videoIndex - 1;
          server.queue.push(`https://www.youtube.com/watch?v=${result[numar].id}`);
        }

  message.channel.send("Song added to queue :ok_hand:");
  if(args[0].includes("youtube") && args[0].includes("https://")){
  server.queue.push(args[0]);
}

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
       play(connection, message);
  });

}

module.exports.help = {
  name: "play"
}
