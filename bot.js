const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '+'

console.log(`Welcome`)

client.on('message',async message => {
  if(message.content.startsWith(prefix + 'تقديم')) {
message.reply(`تم التقديم على طلبك وسيتم الرد في اسرع وقت`)
let embed = new Discord.RichEmbed()
.setTitle('**تقديم جديد !**')
.addField('تم التقديم بواسطه:',message.author.tag,true)
let incidentchannel = message.guild.channels.find(`name`, "التقديمات");
if(!incidentchannel) return message.channel.send("Can't find channel with incidents name. (modlog room)");
incidentchannel.send(embed);





}}
)
 
 
  client.on('message',async message => {
  let mention = message.mentions.members.first();
let mySupport = message.guild.roles.find('name', '✽ Mod Candidate');

  let acRoom = client.channels.get('490517483111841804');
  if(message.content.startsWith(prefix + "قبول")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});
  


client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRroom = client.channels.get('490517483111841804');
  if(message.content.startsWith(prefix + "رفض")) {
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRroom.send(`**${mention} تم رفضك للاسف**`)
  }
});
  


client.login(process.env.BOT_TOKEN);

    
