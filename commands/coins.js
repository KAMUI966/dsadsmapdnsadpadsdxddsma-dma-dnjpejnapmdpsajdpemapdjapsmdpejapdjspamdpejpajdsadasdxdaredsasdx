const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require("fs");

module.exports.run = async (bot,message,args,con) => {
  // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  // if(!coins[message.author.id]){
  //   coins[message.author.id] = {
  //     coins: 0
  //   };
  // }
  // let uCoins = coins[message.author.id].coins;

  con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {

    let sql;

    if(rows == "") {
      sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
    } else {
      let coins = rows[0].coins;
      let coinEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#00fff2")
      .addField("Coins", coins);

      message.channel.send(coinEmbed)
    }
  });

}

module.exports.help = {
  name: "coins"
}
