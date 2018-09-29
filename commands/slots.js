const Discord = require("discord.js");
const fs = require("fs");
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

module.exports.run = async (bot,message,args,con) => {
  const slotOne = slots[Math.floor(Math.random() * slots.length)];
	const slotTwo = slots[Math.floor(Math.random() * slots.length)];
	const slotThree = slots[Math.floor(Math.random() * slots.length)];
  const slotFour = slots[Math.floor(Math.random() * slots.length)];
  const slotFive = slots[Math.floor(Math.random() * slots.length)];
  const slotSix = slots[Math.floor(Math.random() * slots.length)];
  const slotSeven = slots[Math.floor(Math.random() * slots.length)];
  const slotEight = slots[Math.floor(Math.random() * slots.length)];
  const slotNine = slots[Math.floor(Math.random() * slots.length)];

  // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  // if(!coins[message.author.id]){
  // coins[message.author.id] = {
  //   coins: 0,
  //   };
  //   fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  //     if (err) console.log(err)
  //   });
  //
  // }
  // if(coins[message.author.id].coins <= 100) return message.channel.send("You don't have 100 coins.");
  con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
      con.query(sql);
    } else {
      let coins = rows[0].coins;
      if(coins < 100) return message.channel.send("You don't have 100 coins.");
    }
  });
  let win = new Discord.RichEmbed()
  .setColor("#00fff2")
  .addField("Slots",[
        `${slotOne}|${slotTwo}|${slotThree}`,
        `${slotFour}|${slotFive}|${slotSix}`,
        `${slotSeven}|${slotEight}|${slotNine}`,
        "**You won 500 coins!**"
      ]);

  let lose = new Discord.RichEmbed()
  .setColor("#00fff2")
  .addField("Slots",[
        `${slotOne}|${slotTwo}|${slotThree}`,
        `${slotFour}|${slotFive}|${slotSix} **<**`,
        `${slotSeven}|${slotEight}|${slotNine}`,
        "**You lost 100 coins! :(**"
  ]);
	if (slotFour === slotFive && slotFour === slotSix) {
    message.channel.send(win);
    // coins[message.author.id].coins = coins[message.author.id].coins + 500;
    // return fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
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
        sql = `UPDATE coins set coins = '${coins + 500}' WHERE id = '${message.author.id}'`;
        con.query(sql);
      }
    });
		}
    message.channel.send(lose);
    // coins[message.author.id].coins = coins[message.author.id].coins - 100;
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
        sql = `UPDATE coins set coins = '${coins - 100}' WHERE id = '${message.author.id}'`;
        con.query(sql);
      }
    });
}

module.exports.help = {
  name: "slots"
}
