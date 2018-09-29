const Discord = require("discord.js");
const fs = require("fs");
const daily = new Set();
const cooldown = 86400;

module.exports.run = async (bot,message,args,con) => {
  let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));

  if(daily.has(message.author.id)){
    message.delete();
    return message.channel.send("You can claim your next daily reward tomorrow.").then(msg => msg.delete(5000));
  }
//   coins[message.author.id].coins = coins[message.author.id].coins + 500;
//   fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//     if (err) console.log(err)
// });

con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;

  let sql;

  if(rows == "") {
    sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
    con.query(sql);
    return message.channel.send("You previously had no balance so you need to type the command again");
  } else {
    let coins = rows[0].coins;
    sql = `UPDATE coins set coins = '${coins + 100}' WHERE id = '${message.author.id}'`;
    message.channel.send("You claimed your daily reward! Don't forget to get your next reward tomorrow!");
    con.query(sql);
  }
});
  daily.add(message.author.id);
  setTimeout(() =>{
    commands.delete(message.author.id);
  }, cooldown * 1000);

}

module.exports.help = {
  name: "daily"
}
