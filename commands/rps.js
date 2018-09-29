const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let choices = ["rock", "paper", "scissors"];
  const response = choices[Math.floor(Math.random() * choices.length)];
  if(!args[0]) return message.channel.send("Please choose 'rock' or 'paper' or 'scissors'");
  if(args[0].toLowerCase() != "paper" && args[0].toLowerCase() != "rock" && args[0].toLowerCase() != "scissors") return message.channel.send("Please choose 'rock' or 'paper' or 'scissors'");
		if (args[0].toLowerCase() == 'rock') {
			if (response.toLowerCase() == 'rock') return message.channel.send('Rock! A tie...');
			if (response.toLowerCase() == 'paper') return message.channel.send('Paper! I win!');
			if (response.toLowerCase() == 'scissors') return message.channel.send('Scissors! I lose...');
		}
		if (args[0].toLowerCase() == 'paper') {
			if (response.toLowerCase() == 'rock') return message.channel.send('Rock! I lose...');
			if (response.toLowerCase() == 'paper') return message.channel.send('Paper! A tie...');
			if (response.toLowerCase() == 'scissors') return message.channel.send('Scissors! I win!');
		}
		if (args[0].toLowerCase() == 'scissors') {
			if (response.toLowerCase() == 'rock') return message.channel.send('Rock! I win!');
			if (response.toLowerCase() == 'paper') return message.channel.send('Paper! I lose...');
			if (response.toLowerCase() == 'scissors') return message.channel.send('Scissors! A tie...');
		}

}

module.exports.help = {
  name: "rps"
}
