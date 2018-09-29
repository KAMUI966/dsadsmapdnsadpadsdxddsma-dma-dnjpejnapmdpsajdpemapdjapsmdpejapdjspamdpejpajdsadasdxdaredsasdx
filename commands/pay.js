const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args,con) => {
  //s.pay @Snowman 100
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(args[0] == message.author) return message.channel.send("You can't pay yourself.");
  // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  // let uCoins = coins[message.author.id].coins;
  // let pCoins = coins[pUser.id].coins;
  if(!pUser) return message.channel.send("Couldn't find that user.");
  let money = args[1];
  // if(uCoins < args[1]) return message.channel.send("You don't have enough money to send.");
  // coins[message.author.id] = {
  //   coins: uCoins - parseInt(money)
  // };
  // coins[pUser.id] = {
  //   coins: pCoins + parseInt(money)
  // };
  // fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  //   if (err) console.log(err)
  // });
  con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
      con.query(sql);
    } else {
      let coins = rows[0].coins;
      if(coins < args[1]) return message.channel.send("You don't have enough money to send.");
      sql = `UPDATE coins set coins = '${coins - money}' WHERE id = '${message.author.id}'`;
      sql = `UPDATE coins set coins = '${coins + money}' WHERE id = '${pUser.id}'`;
      con.query(sql);
    }
  });
  message.channel.send("The payment was done succesfully.")

}

module.exports.help = {
  name: "pay"
}
