
const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');


const prefix = '#';
const PREFIX = '#';


client.on('ready', () => {
    console.log('Im online diaa');
    client.user.setActivity("brutal person.", { type: "WATCHING"});
})
            

client.on('message', async message => {
	if (message.content === PREFIX + 'join') {
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
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



client.on('guildMemberAdd', async member => {
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


client.on('guildMemberAdd', member => {
    console.log('User' + member.user.tag + 'has joined the server!');
  
    var role = member.guild.roles.find('name', 'user');
    member.addRole(role);
})


client.on('message', message => {
    if (message.author.client) return;
    if (message.content.startsWith('مسح')) { 
    if(!message.channel.guild) return message.reply(' '); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(' ');
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(' ');
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(' ').then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send('```messages has been deleted.```').then(messages => messages.delete(2000));
    })
  }
});

client.on('message', message => {
	if (message.author.client) return;
    if (message.content.startsWith('الوان'))
message.channel.send({
	files: [
	  "./colors.png"
	]
  });
})


client.on('message', message => {
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
  
	  

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
  client.user.setGame("Brutal Person.");
});
const prefix = '#'












const Eris = require("eris");
var kboosh = new Eris("NjY5MDgwMDQ1NTE1NDQwMTI4.Xih0cQ.zfsKv6B-wGAJHxyvhqtcU4RuXDI");
var kboosh_id = "669082696752037889";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "#BadOnline : " + x + ""});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "#BadOnline : " + x + ""});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "478291914106339332") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "$voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "#BadOnline : "+x+""});
    messages = [];
}, 1);
    }
});


  

kboosh.connect("NjY5MDgwMDQ1NTE1NDQwMTI4.Xih0cQ.zfsKv6B-wGAJHxyvhqtcU4RuXDI")









      client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});















// الرابط : http://اسم البروجكت.glitch.me/ 






/*

client.on('message', message => { if (message.content.startsWith("#bands")) { message.guild.fetchBans() .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `)) .catch(console.error); } }); 

*/












client.on('message', message => {
	
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});












const safety = JSON.parse(fs.readFileSync('./nomore.json', 'utf8')); //Toixc Codes 
client.on("message", message =>{//Toixc Codes 
if(!safety[message.author.id]) {//Toixc Codes 
safety[message.author.id] = {//Toixc Codes 
actions: 0
}}//Toixc Codes 
})//Toixc Codes 
// سوي ملف باسم safety.json
//Toixc Codes 
client.on('guildMemberRemove', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes //Toixc Codes 
var anti = ac.entries.first();//Toixc Codes 
if(anti.action == "MEMBER_KICK") {//Toixc Codes 
if(!safety[anti.executor.id]) {//Toixc Codes //Toixc Codes 
safety[anti.executor.id] = {//Toixc Codes 
actions: 0//Toixc Codes //Toixc Codes 
};
} else { //Toixc Codes 
safety[anti.executor.id].actions+=1//Toixc Codes 
if (safety[anti.executor.id].actions == 3) {//Toixc Codes 
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes 
console.log("banned griefer 1")//Toixc Codes 
safety[anti.executor.id].actions = 0//Toixc Codes 
}//Toixc Codes 
}//Toixc Codes 
    }//Toixc Codes 
    });//Toixc Codes 
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes 
        if (err) console.log(err.message);//Toixc Codes 
    });//Toixc Codes 
});//Toixc Codes 





client.on('roleDelete', Toxic => {//Toixc Codes 
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes 
var anti = ac.entries.first();
if(anti.action == "ROLE_DELETE") {//Toixc Codes 
if(!safety[anti.executor.id]) {//Toixc Codes 
safety[anti.executor.id] = {//Toixc Codes 
actions: 0//Toixc Codes 
};
} else { //Toixc Codes 
safety[anti.executor.id].actions+=1//Toixc Codes 
if (safety[anti.executor.id].actions == 3) {//Toixc Codes 
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes 
console.log("banned griefer 1")//Toixc Codes 
safety[anti.executor.id].actions = 0//Toixc Codes 
}//Toixc Codes 
}
    }//Toixc Codes 
    });//Toixc Codes 
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes 
        if (err) console.log(err.message);
    });//Toixc Codes 
});




client.on('channelDelete', Toxic => {//Toixc Codes 
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes 
var anti = ac.entries.first();//Toixc Codes 
if(anti.action == "CHANNEL_DELETE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {//Toixc Codes 
actions: 0
};//Toixc Codes 
} else { 
safety[anti.executor.id].actions+=1//Toixc Codes 
if (safety[anti.executor.id].actions == 1) {//Toixc Codes 
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0//Toixc Codes 
}
}
    }
    });//Toixc Codes 
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);//Toixc Codes 
    });//Toixc Codes 
});//Toixc Codes 


client.on('roleCreate', Toxic => {//Toixc Codes 
Toxic.guild.fetchAuditLogs().then( ac => {//Toixc Codes 
var anti = ac.entries.first();//Toixc Codes 
if(anti.action == "ROLE_CREATE") {//Toixc Codes 
if(!safety[anti.executor.id]) {//Toixc Codes 
safety[anti.executor.id] = {//Toixc Codes 
actions: 0//Toixc Codes 
};//Toixc Codes 
} else { //Toixc Codes 
safety[anti.executor.id].actions+=1//Toixc Codes 
if (safety[anti.executor.id].actions == 4) {//Toixc Codes 
Toxic.guild.members.get(anti.executor.id).ban("Griefing")//Toixc Codes 
console.log("banned griefer 1")//Toixc Codes 
safety[anti.executor.id].actions = 0
}//Toixc Codes 
}//Toixc Codes 
    }//Toixc Codes 
    });//Toixc Codes 
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{//Toixc Codes 
        if (err) console.log(err.message);//Toixc Codes 
    });//Toixc Codes 
});




client.on('channelCreate', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_CREATE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else { 
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 3) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});


client.on('guildBanAdd', function(Toxic){
Toxic.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_BAN_ADD") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else { 
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 3) {
Toxic.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});



















client.login(process.env.token);
