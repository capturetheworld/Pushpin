// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const pinEmoji = '📌';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('raw', packet => {
    if (packet.t === 'MESSAGE_REACTION_ADD'){
        const channelID = packet.d.channel_id;
        console.log(channelID);
        const emoji = packet.d.emoji.name;
        console.log(emoji);
        // console.log(packet.d.message_id);

        let newChannel = client.channels.fetch(channel)
        
        let mess = msg.channel.messages.fetch(packet.d.message_id);
        console.log(mess);
    }
    else{
        return;
    }



});

// client.on('messageReactionAdd', (reaction, user) => {
//     console.log(reaction);
//     console.log(user);
// });



    // if(packet.t.includes(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'])) console.log("WOW");
        // if (packet.t === 'MESSAGE_REACTION_ADD') {
        //     // let channel = client.channels.get(packet.d.channel_id);
        //     // console.log(channel);

        //     console.log("DETECTED A REACTION");
        //     client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        // }
        
   


client.login(process.env.DISCORD_TOKEN);


// client.on('raw', console.log);



// client.on('messageReactionAdd', (reaction, user) => {
//     console.log('a reaction has been added');
// });
    
    


// client.on('messageReactionAdd', (reaction,user) => {
//    // if (msg.content === '📌') {
//       //msg.pin();
//     //}

//     console.log("hello");
// });






//:pushpin: 

