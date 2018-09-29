const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let insulted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!insulted) return message.channel.send("Please tag someone to insult.");

  let insults = [`${insulted}, if laughter is the best medicine, your face must be curing the world.`,
                 `${insulted}, you're so ugly, you scared the crap out of the toilet.`,
                 `${insulted}, no I'm not insulting you, I'm describing you.`,
                 `${insulted}, it's better to let someone think you are an Idiot than to open your mouth and prove it.`,
                 `${insulted}, if I had a face like yours, I'd sue my parents.`,
                 `${insulted}, your birth certificate is an apology letter from the condom factory.`,
                 `${insulted}, I guess you prove that even god makes mistakes sometimes.`,
                 `${insulted}, I’m jealous of people that don’t know you!`,
                 `${insulted}, if I wanted to kill myself I'd climb your ego and jump to your IQ.`,
                 `${insulted}, you must have been born on a highway because that's where most accidents happen.`,
                 `${insulted}, brains aren't everything. In your case they're nothing.`,
                 `${insulted}, I don't know what makes you so stupid, but it really works.`,
                 `${insulted}, I can explain it to you, but I can’t understand it for you.`,
                 `${insulted}, roses are red violets are blue, God made me pretty, what happened to you?`,
                 `${insulted}, calling you an idiot would be an insult to all the stupid people.`,
                 `${insulted}, you, sir, are an oxygen thief!`,
                 `${insulted}, some babies were dropped on their heads but you were clearly thrown at a wall.`,
                 `${insulted}, please shut your mouth when you’re talking to me.`,
                 `${insulted}, I'd slap you, but that would be animal abuse.`,
                 `${insulted}, stop trying to be a smart ass, you're just an ass.`,
                 `${insulted}, the last time I saw something like you, I flushed it.`,
                 `${insulted}, shock me, say something intelligent.`,
                 `${insulted}, if your gonna be two faced, honey at least make one of them pretty.`,
                 `${insulted}, how old are you? - Wait I shouldn't ask, you can't count that high.`,
                 `${insulted}, you're like Monday mornings, nobody likes you.`,
                 `${insulted}, all day I thought of you... I was at the zoo.`,
                 `${insulted}, you're so dumb that you got hit by a parked car.`,
                 `${insulted}, keep talking, someday you'll say something intelligent!`,
                 `${insulted}, you're so fat, you leave footprints in concrete.`
  ];

  let insult = Math.floor((Math.random() * insults.length));

  message.channel.send(insults[insult]);

}

module.exports.help = {
  name: "insult"
}
