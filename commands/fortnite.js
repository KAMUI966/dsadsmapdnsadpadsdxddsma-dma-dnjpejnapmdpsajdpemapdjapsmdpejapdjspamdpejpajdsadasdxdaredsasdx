const Discord = require("discord.js");
const config = require("../botconfig.json");
const apikey = require("../keys.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot,message,args) => {

  if(!args[0]) return message.channel.send("Please specify an username");
  if(!args[1]) return message.channel.send("Please specify a platform (pc, xbl, psn)");
  if(args[1] != "pc" && args[1] != "xbl" && args[1] != "psn") return message.channel.send("Please specify a platform (pc, xbl, psn)");

  let username = args[0];
  let platform = args[1];
  if(args[0] == "Snowman"){
    username = "Snowman FTW"
  }
  let data = ft.user(username, platform).then(data => {
    let stats = data.stats;
    let lifetime = stats.lifetime;

    let lkills = lifetime[10]['Kills'];
    let lwins = lifetime[8]['Wins'];
    let lkd = lifetime[11]['K/d'];
    let lmatches = lifetime[7]['Matches Played'];
    let lscore = lifetime[6]['Score'];
    let lwin = lifetime[9]['Win%'];


    let solo = stats.solo;
    let skills = solo.kills;
    let swins = solo.wins;
    let skd = solo.kd;
    let smPlayed = solo.matches;
    let sscore = solo.score;
    let skpm = solo.kills_per_match;

    // let duo = stats.duo;
    // let dkills = duo.kills;
    // let dwins = duo.wins;
    // let dkd = duo.kd;
    // let dmPlayed = duo.matches;
    // let dscore = duo.score;
    // let dkpm = duo.kills_per_match;
    //
    // let squad = stats.squad;
    // let sqkills = squad.kills;
    // let sqwins = squad.wins;
    // let sqkd = squad.kd;
    // let sqmPlayed = squad.matches;
    // let sqscore = squad.score;
    // let sqkpm = squad.kills_per_match;

    let lifetimee = new Discord.RichEmbed()
    .setTitle(data.username + "'s lifetime Fortnite stats")
    .setColor(config.color)
    .addField("Kills", lkills, true)
    .addField("Wins", lwins, true)
    .addField("K/D", lkd, true)
    .addField("Matches Played", lmatches, true)
    .addField("Score", lscore, true)
    .addField("Win %", lwin, true)
    .setFooter("If you would like to see stats on a mode use s.fortnite name platform (solo, duo, squad)");

    let soloe = new Discord.RichEmbed()
    .setTitle(data.username + "'s solo Fortnite stats")
    .setColor(config.color)
    .addField("Kills", skills, true)
    .addField("Wins", swins, true)
    .addField("K/D", skd, true)
    .addField("Matches Played", smPlayed, true)
    .addField("Score", sscore, true)
    .addField("Kills per match", skpm, true);

    // let duoe = new Discord.RichEmbed()
    // .setTitle(data.username + "'s duo Fortnite stats")
    // .setColor(config.color)
    // .addField("Kills", dkills, true)
    // .addField("Wins", dwins, true)
    // .addField("K/D", dkd, true)
    // .addField("Matches Played", dmPlayed, true)
    // .addField("Score", dscore, true)
    // .addField("Kills per match", dkpm, true);
    //
    // let squade = new Discord.RichEmbed()
    // .setTitle(data.username + "'s squad Fortnite stats")
    // .setColor(config.color)
    // .addField("Kills", sqkills, true)
    // .addField("Wins", sqwins, true)
    // .addField("K/D", sqkd, true)
    // .addField("Matches Played", sqmPlayed, true)
    // .addField("Score", sqscore, true)
    // .addField("Kills per match", sqkpm, true);

    if(!args[2]) return message.channel.send(lifetimee)
    if(args[2] == "solo") return message.channel.send(soloe);
    //  if(args[2] == "duo") return message.channel.send(duoe);
    // if(args[2] == "squad") return message.channel.send(squade);



  }).catch(e =>{
    console.log(e);
    message.channel.send("Couldn't find that username in the database.");
  });

}

module.exports.help = {
  name: "fortnite"
}
