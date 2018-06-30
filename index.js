const Commando = require('discord.js-commando')
const bot = new Commando.Client();
const TOKEN = 'NDYyNTU3NTAyODYxNDc1ODQw.Dhjl4g.BorZwkdX37LXARZSFMVfUDtSHIU'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('fun commands', 'Fun Commands');
bot.registry.registerGroup('nsfw', 'NSFW')
bot.registry.registerGroup('music', 'Music') 
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
});
bot.on('message', function(message){
    if(message.content == 'Good')
    {
        message.channel.sendMessage('Im glad that you are good, ' + message.author);
    }
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
