const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const commands = new Set();
const cdcommands = 5;
bot.commands = new Discord.Collection();
let color = botconfig.color;

var con = mysql.createConnection({
  host: "den1.mysql4.gear.host",
  user: "snowbot",
  password: "Sc7?!5u9rgZN",
  database: "snowbot"
});

con.connect(err => {
  if(err) throw err;
  console.log("Conected to database!");
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;

  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

  });

});

bot.on("ready", async () => {

  //bot.user.setUsername("SnowBot")

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity(`over ${bot.guilds.size} guilds (s.help)`, {type: "WATCHING"});
  //bot.user.setGame("with snow!");

  bot.on("guildCreate", async guild => {
    bot.user.setActivity(`over ${bot.guilds.size} guilds (s.help)`, {type: "WATCHING"});
  });

  bot.on("guildDelete", async guild => {
    bot.user.setActivity(`over ${bot.guilds.size} guilds (s.help)`, {type: "WATCHING"});
  });

bot.on("guildMemberAdd", async member => {

  // let config = JSON.parse(fs.readFileSync("./sconfig.json", "utf8"));
  // if(!config[member.guild.id]){
  //   config[member.guild.id] = {
  //     welcomemessage: "%member% joined the snow party!",
  //     leavemessage: "%member% left the snow party!",
  //     wlchannel: "",
  //     wlenable: "false"
  //   };
  //   fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
  //     if (err) console.log(err)
  //   });
  // }

  con.query(`SELECT * FROM config WHERE id = '${member.guild.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${member.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
            con.query(sql);
    } else {
      let wm = rows[0].wm;
      let lm = rows[0].lm;
      let wl = rows[0].wl;
      let wle = rows[0].wle;
      let logs = rows[0].logs;
      let logse = rows[0].logse;
      if(wle == "false") return;
      let wlc = member.guild.channels.find(`name`, wl);
      wlm = wm.replace("%member%", `${member}`);
      wlc.send(wlm);
    }
  });

  if(member.guild.id == "452200441321750529"){
    let gRole = member.guild.roles.find(`name`, "Guest");
    member.addRole(gRole.id);
  }
});

bot.on("guildMemberRemove", async member => {

  // let config = JSON.parse(fs.readFileSync("./sconfig.json", "utf8"));
  // if(!config[member.guild.id]){
  //   config[member.guild.id] = {
  //     welcomemessage: "%member% joined the snow party!",
  //     leavemessage: "%member% left the snow party!",
  //     wlchannel: "",
  //     wlenable: "false"
  //   };
  //   fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
  //     if (err) console.log(err)
  //   });
  // }

  con.query(`SELECT * FROM config WHERE id = '${member.guild.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${member.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
      con.query(sql);
    } else {
      let wm = rows[0].wm;
      let lm = rows[0].lm;
      let wl = rows[0].wl;
      let wle = rows[0].wle;
      let logs = rows[0].logs;
      let logse = rows[0].logse;
      if(wle == "false") return;
      let wlc = member.guild.channels.find(`name`, wl);
      wlm = lm.replace("%member%", `${member}`);
      wlc.send(wlm);
    }

});
});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.member.hasPermission("ADMINISTRATOR")){
  if(message.content.includes("http://") || message.content.includes("https://") || message.content.includes("www") || message.content.includes(".com") || message.content.includes(".gg")){
  message.delete();
  message.channel.send("**Your message was deleted because it cointains a link.**").then(msg => msg.delete(5000));
  }
}
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
  }
//   let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
//   if(!coins[message.author.id]){
//     coins[message.author.id] = {
//       coins: 0
//     };
//     fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//       if (err) console.log(err)
//   });
// }
con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;

  let sql;

  if(rows == "") {
    sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
            con.query(sql);
  }
});


    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
      if(err) throw err;

      let sql;

      if(rows == "") {
        sql = `INSERT INTO xp (id, xp, level) VALUES ('${message.author.id}', 1, 1)`
      } else {
        let xp = rows[0].xp;
        let level = rows[0].level;
        let nxtLvl = level * 150;
        let nextlevel = level + 1;
        sql = `UPDATE xp set xp = ${xp + 1} WHERE id = '${message.author.id}'`;
        if(nxtLvl <= xp){
          sql = `UPDATE xp set level = ${level + 1} WHERE id = '${message.author.id}'`;
          let lvlup = new Discord.RichEmbed()
          .setTitle("Level Up!")
          .setColor(color)
          .addField("New Level", nextlevel);
          message.channel.send(lvlup).then(msg => {msg.delete(5000)});
      }
    }

      con.query(sql);
    });

  // let xp = JSON.parse(fs.readFileSync("./xp.json", "utf8"));
  let prefix = prefixes[message.guild.id].prefixes;
  //
  // if(!xp[message.author.id]){
  //   xp[message.author.id] = {
  //     xp: 0,
  //     level: 1
  //   };
  // }

    // let curxp = xp[message.author.id].xp;
    // let curlvl = xp[message.author.id].level;
    //let nxtLvl = level * 150;
    // if(!message.content.startsWith(`${prefix}` + "level")){
    //   xp[message.author.id].xp = xp[message.author.id].xp + 1;
    //   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    //     if(err) console.log(err)
    //   });
    // }
      // fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      //   if(err) console.log(err)
      // });

  if(!message.content.startsWith(prefix)) return;
  if(commands.has(message.author.id)) return message.channel.send("You need to wait 5 seconds between commands.");
  if(!message.member.hasPermission("ADMINISTRATOR")){
    commands.add(message.author.id);
  }
  setTimeout(() =>{
    commands.delete(message.author.id);
  }, cdcommands * 1000);
  //let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args,con);

});

bot.login(process.env.BOT_TOKEN);
