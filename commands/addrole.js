const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //s.addrole @Snowman Owner
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can't add roles.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role");

  if(rMember.roles.has(gRole.id));
  await(rMember.addRole(gRole.id));

  try{
  await rMember.send(`I've given the ${gRole.name} role to you.`);
  }catch(e){
  rMember.send(`I've given the ${gRole.name} to ${rMember}`);
}
}

module.exports.help = {
  name: "addrole"
}
