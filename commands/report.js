const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

	let rAvatar = message.guild.member.displayAvatarURL;

    if(!rUser) return message.channel.send("Couldn't find user.");

    let reason = args.join(" ").slice(21);

	if (!reason) return message.channel.send("No reason specified.");



    let reportEmbed = new Discord.RichEmbed()

    .setDescription(`${rAvatar}` + "Reports")

    .setColor("#15f153")

    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)

    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)

    .addField("Channel", message.channel)

    .addField("Time", message.createdAt)

    .addField("Reason", reason);



    let reportschannel = message.guild.channels.find(`name`, "reports");

    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");





    message.delete().catch(O_o=>{});

    reportschannel.send(reportEmbed);



}



module.exports.help = {

  name: "report"

}
