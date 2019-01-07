const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});





////////////////تجربه اكواد




client.on('message' , message => {
if(message.content === '!ghelp') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
**__وصف عن البوت__**
**
[❖─═════ {✯ كيف تستخدم البوت  ✯} ═════─❖]
** اهم الاشياء لي تتأكد منها **
** انو البوت يقدر يكتب في الروم لي تبي تحط عليه القيف اواي **
** انك تحط اسم الروم بدون ماتحط علامة الهاشتاق **
** واعطي البوت انو يقدر يعدل في الرسائل عشان يمسح الرسايل بعد ما يكمل **
** واتبع الخطوات الموجودة في الفيديو التالي **
https://youtu.be/7ICib2XPTQQ
[❖─═════ {✯ الدعم الفني  ✯} ═════─❖]
** رابط سيرفر الدعم الفني https://discord.gg/YdbMBPj **
** موقع البوت الرسمي : http://giveaway-bot-ar.ga/  الموقع قيد التعديل 
[❖─═════ {✯ :tada: البوت مازال تحت التطوير:tada: ✯} ═════─❖]

`);
}
})














/////////////////////////////////////////////وامر اداريه




client.on('message',async message => {
    const moment = require('moment'); //npm i moment
const ms = require('ms') //npm i ms
    var prefix = '!' //Bot Prefix !
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **اكتب اسم الروم الكتابي **`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **اكتب الروم الكتابي بدون علامة هاشتاق :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **ادخل وقت المسابقة**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هاذا الوقت **');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **ارسل اسم الجائزة **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **تم انشاء القيف اواي** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**تهانينا ${gFilter}! لقد فزت ب \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **انا لا املك صلاحية**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

//////////////////////////////////////////////////////////

  



client.on('message', message => {
    if (message.content === "bot123") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')//By ; 
 .addField("**اسم السيرفر**", message.guild.name)
 .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
 .addField("**عدد المستخدمين:**", client.users.size)
 .addField("**عدد القنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
   }
});
///////////////////////////////////////////////////////////////////////
client.on('message', message => {
   
if(message.content == ("bot789")) {
         if(!message.author.id === '517409391570583574') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
}) 
}
});  


/////////////////////////////////////////////////////


client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 100000 ;
    var setGame = [`!ghelp Servers ${client.guilds.size} `,`invite Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],``);
    }, ms);100000

});





















// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
