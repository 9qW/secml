
const Discord = require('discord.js');
const bot = new Discord.Client();
const Canvas = require('canvas');

const token = 'NjY5NDM4MTY5MTc1MDMxODIx.Xif1kg.0kqESMpaOPHpcs-Y-YZiR6It9cU';

const PREFIX = '#';


bot.on('ready', () => {
    console.log('Im online diaa');
    bot.user.setActivity("brutal person.", { type: "WATCHING"});
})
            

bot.on('message', async message => {
	if (message.content === PREFIX + 'join') {
		bot.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});



const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	
	let fontSize = 32;

	do {
		
		ctx.font = `${fontSize -= 10}px sans-serif`;
		//avatar size
	} while (ctx.measureText(text).width > canvas.width - 220);

	
	return ctx.font;
};

bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'txt');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome.png');
	ctx.drawImage(background, 0, 5, canvas.width, canvas.height);

	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.4, canvas.height / 1.4);

	ctx.beginPath();
	ctx.arc(125, 125, 99, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome.png');

	channel.send(' ', attachment);
});


bot.on('guildMemberAdd', member => {
    console.log('User' + member.user.tag + 'has joined the server!');
  
    var role = member.guild.roles.find('name', 'user');
    member.addRole(role);
})


bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith('مسح')) { 
    if(!message.channel.guild) return message.reply(' '); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(' ');
     if(!message.guild.member(bot.user).hasPermission('MANAGE_GUILD')) return message.channel.send(' ');
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(' ').then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send('```messages has been deleted.```').then(messages => messages.delete(2000));
    })
  }
});

bot.on('message', message => {
	if (message.author.bot) return;
    if (message.content.startsWith('الوان'))
message.channel.send({
	files: [
	  "./colors.png"
	]
  });
})


bot.on('message', message => {
	let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
	 const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Wrong color number.**`)
.setColor(`000000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
		  if(!a)return;
const embed = new Discord.RichEmbed()
			  
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color has been changed successfully.**`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
	if (!args)return;
setInterval(function(){})
			let count = 0;
			let ecount = 0;
  for(let x = 1; x < 201; x++){
	 
	  message.member.removeRole(message.guild.roles.find("name",`${x}`))
	
	  }
		  message.member.addRole(message.guild.roles.find("name",`${args}`));
  
	  
}
});

bot.login(token);