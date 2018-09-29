const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require("fs");

module.exports.run = async (bot,message,args,con) => {
  // let xp = JSON.parse(fs.readFileSync("./xp.json", "utf8"));
  // if(!xp[message.author.id]){
  // xp[message.author.id] = {
  //   xp: 0,
  //   level: 1
  //   };
  //   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  //     if (err) console.log(err)
  // });
  // }
  // let curxp = xp[message.author.id].xp;
  // let curlvl = xp[message.author.id].level;
  con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO xp (id, xp, level) VALUES ('${message.author.id}', 1, 1)`
    } else {
      let xp = rows[0].xp;
      let level = rows[0].level;
      let nextlvlxp = level * 150;
      let difference = nextlvlxp - xp;
      let levelembed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#00fff2")
      .addField("Level", level, true)
      .addField("XP", xp, true)
      .setFooter(`${difference} XP until level up`, message.author.displayAvatarURL);

      message.channel.send(levelembed);
    }
  });

}

module.exports.help = {
  name: "level"
}
