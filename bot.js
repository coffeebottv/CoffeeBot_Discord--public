require('dotenv/config')
const { Client, Intents } = require('discord.js');
const client = new Client({ 
    autoReconnect: true,
	retryLimit: 10,
    fetchAllMembers: true,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});


const prefix = '!';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', async message => {
    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.split(/[ ]+/)
        // command_handler
    }

    // if else
});



client.login(process.env.NODE_ENV = 'production' ? process.env.DISCORD_TOKEN_PROD : process.env.DISCORD_TOKEN_DEV);