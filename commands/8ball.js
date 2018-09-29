const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[2]) return message.channel.send("Please ask a question");
   let replies = ["Yes.", "No.", "Not today", "I don't know"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(`${message.author.tag} asked:`)
   .setColor("#00fff2")
   .addField("**❯ Question**", question)
   .addField("**❯ Answer**", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"8ball"
}
