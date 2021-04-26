// Run dotenv
// 'use strict'
require('dotenv').config();

let Discord = require('discord.js');
let client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
let pinEmoji = '📌';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




client.on('raw', async packet => {
    if (packet.t === 'MESSAGE_REACTION_ADD'){

        // console.log("emoji name is " + packet.d.emoji.name);
        let channelID = packet.d.channel_id;
        
        // let storedChannel = client.channels.fetch(channelID).resolve();
            
        // let newChannel = client.channels.resolve(promisechannel);
        let messID = packet.d.message_id;
        // let messagess = (await client.channels.fetch(channelID)); 


        let storedMessage = await client.channels.fetch(channelID, true, false).then((channel) => channel.messages.fetch(messID));

        if(packet.d.emoji.name === pinEmoji){
             console.log("Qapla'");
             storedMessage.pin();
        }
        else{
            // console.log("wrong emoji");
            // console.log(packet);
            return;
        }
        // console.log(storedMessage);

        
        
        // console.log(storedChannel.name);


        // console.log(channel);

        // const emoji = packet.d.emoji.name;
        // console.log(emoji);
        // console.log(packet.d.message_id);

        // let newChannel = client.channels.fetch(channelID).
        
        
    }
    else{
        return;
    }



});





client.login(process.env.DISCORD_TOKEN);


