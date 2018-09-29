const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let pussy = [
    "https://cdn.boob.bot/pussy/D684.jpg",
    "https://cdn.boob.bot/pussy/602E.jpg",
    "https://cdn.boob.bot/pussy/9D02.jpg",
    "https://cdn.boob.bot/pussy/FCA2.jpg",
    "https://cdn.boob.bot/pussy/12766.png",
    "https://cdn.boob.bot/pussy/FBF8.jpg",
    "https://cdn.boob.bot/pussy/13E3E.gif",
    "https://cdn.boob.bot/pussy/103F0.jpg",
    "https://cdn.boob.bot/pussy/103F0.jpg",
    "https://cdn.boob.bot/pussy/AA06.png",
    "https://cdn.boob.bot/pussy/7B68.jpg",
    "https://cdn.boob.bot/pussy/F554.jpg",
    "https://cdn.boob.bot/pussy/119B8.jpg",
    "https://cdn.boob.bot/pussy/9350.jpg",
    "https://cdn.boob.bot/pussy/40B4.JPG",
    "https://cdn.boob.bot/pussy/4406.JPG",
    "https://cdn.boob.bot/pussy/778E.jpg",
    "https://cdn.boob.bot/pussy/1137A.jpg",
    "https://cdn.boob.bot/pussy/C540.jpg",
    "https://cdn.boob.bot/pussy/1190E.jpg",
    "https://cdn.boob.bot/pussy/1117C.jpg",
    "https://cdn.boob.bot/pussy/A164.jpg",
    "https://cdn.boob.bot/pussy/12D1C.jpg",
    "https://cdn.boob.bot/pussy/6D32.jpg",
    "https://cdn.boob.bot/pussy/5DA8.jpg",
    "https://cdn.boob.bot/pussy/97B2.jpg",
    "https://cdn.boob.bot/pussy/F664.jpg",
    "https://cdn.boob.bot/pussy/14746.gif",
    "https://cdn.boob.bot/pussy/1306E.jpg",
    "https://cdn.boob.bot/pussy/43C2.JPG",
    "https://cdn.boob.bot/pussy/457C.JPG",
    "https://cdn.boob.bot/pussy/E058.jpg",
    "https://cdn.boob.bot/pussy/F39A.jpg",
    "https://cdn.boob.bot/pussy/130B2.jpg",
    "https://cdn.boob.bot/pussy/AE46.png",
    "https://cdn.boob.bot/pussy/4D30.jpg",
    "https://cdn.boob.bot/pussy/12964.jpg",
    "https://cdn.boob.bot/pussy/8ECC.jpg",
    "https://cdn.boob.bot/pussy/E80C.jpg",
    "https://cdn.boob.bot/pussy/AD14.jpg",
    "https://cdn.boob.bot/pussy/3AFE.JPG",
    "https://cdn.boob.bot/pussy/789E.jpg",
    "https://cdn.boob.bot/pussy/BA18.jpg",
    "https://cdn.boob.bot/pussy/E124.jpg",
    "https://cdn.boob.bot/pussy/DAC4.jpg",
    "https://cdn.boob.bot/pussy/124BE.jpg",
    "https://cdn.boob.bot/pussy/9CE0.jpg",
    "https://cdn.boob.bot/pussy/1029C.jpg",
    "https://cdn.boob.bot/pussy/A808.jpg",
    "https://cdn.boob.bot/pussy/FD90.jpg",
    "https://cdn.boob.bot/pussy/AA4A.jpg",
    "https://cdn.boob.bot/pussy/70EA.jpg",
    "https://cdn.boob.bot/pussy/CA90.jpg",
    "https://cdn.boob.bot/pussy/9E56.gif",
    "https://cdn.boob.bot/pussy/400A.JPG",
    "https://cdn.boob.bot/pussy/BF02.jpg",
    "https://cdn.boob.bot/pussy/7904.jpg",
    "https://cdn.boob.bot/pussy/B396.jpg",
    "https://cdn.boob.bot/pussy/1445A.jpg",
    "https://cdn.boob.bot/pussy/10B1C.jpg",
    "https://cdn.boob.bot/pussy/116CC.jpg",
    "https://cdn.boob.bot/pussy/EB3C.jpg",
    "https://cdn.boob.bot/pussy/14A10.jpg",
    "https://cdn.boob.bot/pussy/E784.jpg",
    "https://cdn.boob.bot/pussy/AE46.png",
    "https://cdn.boob.bot/pussy/12A30.jpg",
    "https://cdn.boob.bot/pussy/C144.jpg",
    "https://cdn.boob.bot/pussy/AF9A.jpg",
    "https://cdn.boob.bot/pussy/D7B6.jpg",
    "https://cdn.boob.bot/pussy/D310.jpg",
    "https://cdn.boob.bot/pussy/131A0.jpg",
    "https://cdn.boob.bot/pussy/6E20.jpg",
    "https://cdn.boob.bot/pussy/11842.jpg",
    "https://cdn.boob.bot/pussy/3ABA.JPG",
    "https://cdn.boob.bot/pussy/125F0.jpg",
    "https://cdn.boob.bot/pussy/501C.jpg",
    "https://cdn.boob.bot/pussy/EC2A.jpg",
    "https://cdn.boob.bot/pussy/A6F8.jpg",
    "https://cdn.boob.bot/pussy/13F70.jpg",
    "https://cdn.boob.bot/pussy/41A2.JPG",
    "https://cdn.boob.bot/pussy/5B66.jpg",
    "https://cdn.boob.bot/pussy/145D0.jpg",
    "https://cdn.boob.bot/pussy/E18A.jpg",
    "https://cdn.boob.bot/pussy/D288.jpg",
    "https://cdn.boob.bot/pussy/43E4.JPG",
    "https://cdn.boob.bot/pussy/7370.jpg",
    "https://cdn.boob.bot/pussy/8B7A.jpg",
    "https://cdn.boob.bot/pussy/F048.jpg",
    "https://cdn.boob.bot/pussy/3E72.JPG",
    "https://cdn.boob.bot/pussy/124E0.jpg",
    "https://cdn.boob.bot/pussy/7AE0.jpg",
    "https://cdn.boob.bot/pussy/52C4.jpg",
    "https://cdn.boob.bot/pussy/DE9E.jpg",
    "https://cdn.boob.bot/pussy/C91A.jpg",
    "https://cdn.boob.bot/pussy/10CB4.jpg",
    "https://cdn.boob.bot/pussy/A186.jpg",
    "https://cdn.boob.bot/pussy/FC5E.jpg",
    "https://cdn.boob.bot/pussy/AE8A.jpg",
    "https://cdn.boob.bot/pussy/11226.jpg",
    "https://cdn.boob.bot/pussy/C474.jpg",
    "https://cdn.boob.bot/pussy/6050.jpg",
    "https://cdn.boob.bot/pussy/576A.jpg",
    "https://cdn.boob.bot/pussy/1458C.jpg",
    "https://cdn.boob.bot/pussy/13A86.jpg",
    "https://cdn.boob.bot/pussy/A7A2.jpg",
    "https://cdn.boob.bot/pussy/143F4.jpg",
    "https://cdn.boob.bot/pussy/C0DE.jpg",
    "https://cdn.boob.bot/pussy/1115A.jpg",
    "https://cdn.boob.bot/pussy/57D0.jpg",
    "https://cdn.boob.bot/pussy/1449E.gif",
    "https://cdn.boob.bot/pussy/D222.jpg",
    "https://cdn.boob.bot/pussy/E71E.jpg",
    "https://cdn.boob.bot/pussy/4714.JPG",
    "https://cdn.boob.bot/pussy/9680.jpg",
    "https://cdn.boob.bot/pussy/1427E.jpg",
    "https://cdn.boob.bot/pussy/3FC6.JPG",
    "https://cdn.boob.bot/pussy/AD58.jpg",
    "https://cdn.boob.bot/pussy/9B8C.jpg",
    "https://cdn.boob.bot/pussy/F70E.jpg",
    "https://cdn.boob.bot/pussy/7D22.jpg"
  ]

  if(!message.channel.nsfw){
    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let nonsfw = new Discord.RichEmbed()
    .setColor("#00fff2")
    .setTitle("No NSFW is allowed in this channel,")
    .setDescription("but enjoy this pussy :cat:")
    .setImage(body.file);

    return message.channel.send(nonsfw);
  }

  let result = Math.floor((Math.random() * pussy.length));

  let msg = new Discord.RichEmbed()
  .setTitle(":ok_hand: :sweat_drops:")
  .setImage(pussy[result])
  .setFooter(`Requested by ${message.member.user.tag} at ${message.createdAt.toDateString()}`);

  message.channel.send(msg);


}

module.exports.help = {
  name: "pussy"
}
