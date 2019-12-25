const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.login("NjU5NDkzODc0ODU4OTgzNDI1.XgPIww.JSTGSqtvdrrcMt10eqEIQNtiUTQ");

client.on('message', message => {

    if (!message.guild) return;
  
    if (message.content === 'e!join') {
  
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { 
            message.reply('Jai rejoinds le channel vocal !');
          })
          .catch(console.log);
      } else {
        message.reply('Tu dois dabord rejoindre en premier ! ');
      }
    }
 });
