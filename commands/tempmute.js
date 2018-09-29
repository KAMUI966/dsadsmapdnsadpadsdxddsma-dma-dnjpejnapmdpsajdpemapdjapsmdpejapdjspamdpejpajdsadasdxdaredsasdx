const Discord = require("discord.js");

const ms = require("ms");

module.exports.run = async (bot, message, args) =>{

    //s.tempmute @user 1s/m/h/d reason
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("Couldn't find user.");
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("You didn't specify a time!");
    let reason = args[2]
    if(!reason) return message.channel.send("You didn't specify a reason.");

    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't mute that person.");
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
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
    //end of create role

    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}.`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted.`);
    }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}
