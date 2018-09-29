const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args,con) => {
  // let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
  // if(!coins[message.author.id]){
  // coins[message.author.id] = {
  //   coins: 0,
  //   };
  //   fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  //     if (err) console.log(err)
  //   });
  // }

  const fishID = Math.floor(Math.random() * 10) + 1;
  // if(coins[message.author.id].coins <= 100) return message.channel.send("You don't have 100 coins.");
  // coins[message.author.id].coins = coins[message.author.id].coins - 100;
  con.query(`SELECT * FROM coins WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;

    let sql;

    if(rows == "") {
      sql = `INSERT INTO coins (id, coins) VALUES ('${message.author.id}', 0)`
      con.query(sql);
    } else {
      let coins = rows[0].coins;
      if(coins < 100) return message.channel.send("You don't have 100 coins.");
      sql = `UPDATE coins set coins = '${coins - 100}' WHERE id = '${message.author.id}'`;
      con.query(sql);
    }
  });
		if (fishID < 5){
      message.channel.send(`You caught a common fish and sold it for 50 coins!`);
      // coins[message.author.id].coins = coins[message.author.id].coins + 50;
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
          sql = `UPDATE coins set coins = '${coins + 50}' WHERE id = '${message.author.id}'`;
          con.query(sql);
        }
      });
    }
	  if (fishID < 8 && fishID > 5){
      message.channel.send(`You caught a rare fish and sold it for 100 coins!`);
      // coins[message.author.id].coins = coins[message.author.id].coins + 100;
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
          sql = `UPDATE coins set coins = '${coins + 100}' WHERE id = '${message.author.id}'`;
          con.query(sql);
        }
      });
    }
		if (fishID < 9 && fishID > 7){
      message.channel.send(`You caught a epic fish and sold it for 250 coins!`);
      // coins[message.author.id].coins = coins[message.author.id].coins + 250;
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
          sql = `UPDATE coins set coins = '${coins + 250}' WHERE id = '${message.author.id}'`;
          con.query(sql);
        }
      });
    }
    if (fishID == 10){
      message.channel.send(`You caught a legendary fish and sold it for 500 coins!`);
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

}

module.exports.help = {
  name: "fishy"
}
