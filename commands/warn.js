const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  //s.warn @Snowman nab
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.sen("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.channel.send("Couldn't find that member.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't warn that member");
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send("Specify a reason");

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#00fff2")
  .addField("Warned user", `${wUser}`)
  .addField("Warned in", message.channel)
  .addField("Number of warnings", warns[wUser.id].warns)
  .addField("Reason", reason)
  .addField("Warned at", message.createdAt);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.channel.send("Couldn't find incidents channel.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000)",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole,
            {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = "1h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser} has been temporarily muted.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`${wUser} has been unmuted.`)
    }, ms(mutetime));

  }
  if(warns[wUser.id].warns == 4){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000)",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole,
            {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = "1d";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser} has been temporarily muted.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`${wUser} has been unmuted.`)
    });
;
  }
  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).ban(reason);
    message.channel.send(`${wUser} has been banned.`);

  }


}

module.exports.help = {
  name: "warn"
}
