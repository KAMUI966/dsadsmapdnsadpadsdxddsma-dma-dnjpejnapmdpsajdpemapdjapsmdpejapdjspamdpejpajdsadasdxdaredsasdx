const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args,con) => {

  // let config = JSON.parse(fs.readFileSync("./sconfig.json", "utf8"));
  // if(!config[message.guild.id]){
  //   config[message.guild.id] = {
  //     welcomemessage: "%member% joined the snow party!",
  //     leavemessage: "%member% left the snow party!",
  //     wlchannel: "",
  //     wlenable: "false",
  //     logs: "",
  //     logsenable: "false",
  //   };
  //   fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
  //     if (err) console.log(err)
  //   });
  // }
  if(!args[0]) return message.channel.send("Please use s.help config for help.");
  //HERE STARTS WELCOME MESSAGE
   if(args[0] == "welcome-message"){
     if(!args[1]) return message.channel.send("Please input a welcome message.");
     args.shift();
     // config[message.guild.id].welcomemessage = args.join(" ");
     con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
       if(err) throw err;

       let sql;

       if(rows == "") {
         sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
       } else {
         let wm = rows[0].wm;
         let lm = rows[0].lm;
         let wl = rows[0].wl;
         let wle = rows[0].wle;
         let logs = rows[0].logs;
         let logse = rows[0].logse;
        sql = `UPDATE config set wm = '${args.join(" ")}' WHERE id = '${message.guild.id}'`;
        con.query(sql);
       }
     });
     message.channel.send("Welcome message set.");
     // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
     //   if (err) console.log(err)
     // });
   }
   //HERE ENDS WELCOME MESSAGE

   //HERE STARTS LEAVE MESSAGE
    if(args[0] == "leave-message"){
      if(!args[1]) return message.channel.send("Please input a leave message.");
      args.shift();
      // config[message.guild.id].leavemessage = args.join(" ");
      con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        let sql;

        if(rows == "") {
          sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
        } else {
        let wm = rows[0].wm;
        let lm = rows[0].lm;
        let wl = rows[0].wl;
        let wle = rows[0].wle;
        let logs = rows[0].logs;
        let logse = rows[0].logse;
        sql = `UPDATE config set lm = '${args.join(" ")}' WHERE id = '${message.guild.id}'`;
        con.query(sql);
      }
      });
      message.channel.send("Leave message set.");
      // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
      //   if (err) console.log(err)
      // });
    }
    //HERE ENDS LEAVE MESSAGE

    //HERE STARTS WL CHANNEL
    if(args[0] == "welcome-leave-channel"){
    if(!args[1]) return message.channel.send("Please input a channel name without #.");
    let wlchannel = message.guild.channels.find(`name`, args[1]);
    if(!wlchannel) return message.channel.send("Can't find that channel.");
       // config[message.guild.id].wlchannel = args[1];
       con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
         if(err) throw err;

         let sql;

         if(rows == "") {
           sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
         } else {
         let wm = rows[0].wm;
         let lm = rows[0].lm;
         let wl = rows[0].wl;
         let wle = rows[0].wle;
         let logs = rows[0].logs;
         let logse = rows[0].logse;
         sql = `UPDATE config set wl = '${args[1]}' WHERE id = '${message.guild.id}'`;
         con.query(sql);
       }
       });
       message.channel.send("Channel set.");
       // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
       //   if (err) console.log(err)
       // });
     }
     //HERE ENDS WL CHANNEL

     //HERE STARTS WL ENABLE
      if(args[0] == "welcome-leave-enable"){
        if(!args[1]) return message.channel.send("Please input true (enable) or false (disable).");
        if(args[1] != "true" && args[1] != "false") return message.channel.send("Please input true (enable) or false (disable).");
        if(args[1] == "true"){
          // config[message.guild.id].wlenable = args[1];
          con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
            if(err) throw err;

            let sql;

            if(rows == "") {
              sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
            } else {
            let wm = rows[0].wm;
            let lm = rows[0].lm;
            let wl = rows[0].wl;
            let wle = rows[0].wle;
            let logs = rows[0].logs;
            let logse = rows[0].logse;
            sql = `UPDATE config set wle = '${args[1]}' WHERE id = '${message.guild.id}'`;
            con.query(sql);
          }
          });
          message.channel.send("Welcome/leave messages enabled.");
        }
        if(args[1] == "false"){
          // config[message.guild.id].wlenable = args[1];
          con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
            if(err) throw err;

            let sql;

            if(rows == "") {
              sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
            } else {
            let wm = rows[0].wm;
            let lm = rows[0].lm;
            let wl = rows[0].wl;
            let wle = rows[0].wle;
            let logs = rows[0].logs;
            let logse = rows[0].logse;
            sql = `UPDATE config set wle = '${args[1]}' WHERE id = '${message.guild.id}'`;
            con.query(sql);
          }
          });
          message.channel.send("Welcome/leave messages disabled.");
        }
        // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
        //   if (err) console.log(err)
        // });
      }
      //HERE ENDS WL ENABLE

      //HERE STARTS LOGS ENABLE
       if(args[0] == "logs-enable"){
         if(!args[1]) return message.channel.send("Please input true (enable) or false (disable).");
         if(args[1] != "true" && args[1] != "false") return message.channel.send("Please input true (enable) or false (disable).");
         if(args[1] == "true"){
           // config[message.guild.id].logsenable = args[1];
           con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
             if(err) throw err;

             let sql;

             if(rows == "") {
               sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
             } else {
             let wm = rows[0].wm;
             let lm = rows[0].lm;
             let wl = rows[0].wl;
             let wle = rows[0].wle;
             let logs = rows[0].logs;
             let logse = rows[0].logse;
             sql = `UPDATE config set logse = '${args[1]}' WHERE id = '${message.guild.id}'`;
             con.query(sql);
           }
           });
           message.channel.send("Logs enabled.");
         }
         if(args[1] == "false"){
           // config[message.guild.id].logsenable = args[1];
           con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
             if(err) throw err;

             let sql;

             if(rows == "") {
               sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
             } else {
             let wm = rows[0].wm;
             let lm = rows[0].lm;
             let wl = rows[0].wl;
             let wle = rows[0].wle;
             let logs = rows[0].logs;
             let logse = rows[0].logse;
             sql = `UPDATE config set logse = '${args[1]}' WHERE id = '${message.guild.id}'`;
             con.query(sql);
           }
           });
           message.channel.send("Logs disabled.");
         }
         // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
         //   if (err) console.log(err)
         // });
       }
       //HERE ENDS LOGS ENABLE

       //HERE STARTS LOGS CHANNEL
       if(args[0] == "logs-channel"){
       if(!args[1]) return message.channel.send("Please input a channel name without #.");
       let wlchannel = message.guild.channels.find(`name`, args[1]);
       if(!wlchannel) return message.channel.send("Can't find that channel.");
          // config[message.guild.id].logs = args[1];
          con.query(`SELECT * FROM config WHERE id = '${message.guild.id}'`, (err, rows) => {
            if(err) throw err;

            let sql;

            if(rows == "") {
              sql = `INSERT INTO config (id, wm, lm, wl, wle, logs, logse) VALUES ('${message.guild.id}', '%member% joined the snow party!', '%member% left the snow party!', 'in-out', 'false', 'logs', 'false')`
            } else {
            let wm = rows[0].wm;
            let lm = rows[0].lm;
            let wl = rows[0].wl;
            let wle = rows[0].wle;
            let logs = rows[0].logs;
            let logse = rows[0].logse;
            sql = `UPDATE config set logs = '${args[1]}' WHERE id = '${message.guild.id}'`;
            con.query(sql);
          }
          });
          message.channel.send("Channel set.");
          // fs.writeFile("./sconfig.json", JSON.stringify(config), (err) => {
          //   if (err) console.log(err)
          // });
        }
        //HERE ENDS LOGS CHANNEL
}

module.exports.help = {
  name: "config"
}
