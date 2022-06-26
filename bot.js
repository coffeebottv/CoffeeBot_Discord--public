require('dotenv/config')
const { prefix, status, twitch } = require('./config/config.json');
const { Client, Intents, version } = require('discord.js');
const AsciiTable = require('ascii-table');
const { Fish } = require('anti-phish-advanced');
const path = require('path');
const fs = require('fs');


// <======== Cache files =================================>
const BANNED = require('./cache/ban.cache.js')
const ECONEMY = require('./cache/economy.cache.js')
const EXP_CHAT = require('./cache/exp.chat.cache.js')
const EXP_VOICE = require('./cache/exp.voice.cache.js')
const GUILDS = require('./cache/guild.cache.js')
const MESSAGES = require('./cache/messages.cache')
const WARNINGS = require('./cache/warning.cache.js')
// <======================================================>

// <======== Middelware ==================================>
const Blacklisted_words = require('./middleware/_guilds/words.blacklisted.middleware.js');
// <======================================================>


const Bot = new Client({
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
})

const phishing = new Fish();


// <=== Detect and delete all phishing links and send to mod-log ========>
Bot.on("phishingMessage", async (message, data) => {

})
// <=====================================================================>



// <=== Console log and change bots status when launching ===============>
Bot.on('ready', async () => {
    const Bot_Information = new AsciiTable(`Connected to Discord!`)
    Bot_Information.setHeading('Property', 'Value')
        Bot_Information.addRow('Name', Bot.user.tag)
        Bot_Information.addRow('ID', Bot.user.id)
        Bot_Information.addRow('Prefix', prefix)
        Bot_Information.addRow('Bot Version', require('./package.json').version)
        Bot_Information.addRow('Discord.js Version', version)
        Bot_Information.addRow('Invite link', `https://discordapp.com/oauth2/authorize?client_id=${Bot.user.id}&scope=bot&permissions=8`)
    console.log(Bot_Information.toString())

    const [MEMORY] = await Promise.all([
        LOAD_MEMORY()
    ]);
    const CacheStatus = new AsciiTable(`Cache Status`)
    CacheStatus.setHeading('Property', 'Value')
        CacheStatus.addRow('Banned', `${MEMORY.BANNED_STATUS.CacheSize} / ${MEMORY.BANNED_STATUS.MemorySize} ${MEMORY.BANNED_STATUS.Complete} `)
        // CacheStatus.addRow('Economy', MEMORY.ECONEMY_STATUS)
        // CacheStatus.addRow('Exp Chat', MEMORY.EXP_CHAT_STATUS)
        // CacheStatus.addRow('Exp Voice', MEMORY.EXP_VOICE_STATUS)
        // CacheStatus.addRow('Guilds', MEMORY.GUILDS_STATUS)
        // CacheStatus.addRow('Messages', MEMORY.MESSAGES_STATUS)
        // CacheStatus.addRow('Warnings', MEMORY.WARNINGS_STATUS)
    // console.log(CacheStatus.toString())
    console.log(MEMORY.BANNED_STATUS.Map)



    // console.log(Bot_Information.toString())
    Bot.user.setActivity(status, {
        type: "STREAMING",
        url: twitch
    });
})
// <=====================================================================>



// <=== When a member sends a message, check for commands ===============>
Bot.on('messageCreate', async message => {
    if(message.author.bot) return;

    
});
// <=====================================================================>





const LOAD_MEMORY = async () => {
    const MEMORY = require('./core/memory.core.json');

    const [
        BANNED_STATUS,
        // ECONEMY_STATUS,
        // EXP_CHAT_STATUS,
        // EXP_VOICE_STATUS,
        // GUILDS_STATUS,
        // MESSAGES_STATUS,
        // WARNINGS_STATUS
    ] = await Promise.all([
        BANNED.load(MEMORY.BANNED),
        // ECONEMY.load(MEMORY.ECONEMY),
        // EXP_CHAT.load(MEMORY.EXP_CHAT),
        // EXP_VOICE.load(MEMORY.EXP_VOICE),
        // GUILDS.load(MEMORY.GUILDS),
        // MESSAGES.load(MEMORY.MESSAGES),
        // WARNINGS.load(MEMORY.WARNINGS)
    ]);

    return {
        BANNED_STATUS,
        // ECONEMY_STATUS,
        // EXP_CHAT_STATUS,
        // EXP_VOICE_STATUS,
        // GUILDS_STATUS,
        // MESSAGES_STATUS,
        // WARNINGS_STATUS
    }
}


Bot.login(process.env.NODE_ENV = 'production' ? process.env.DISCORD_TOKEN_PROD : process.env.DISCORD_TOKEN_DEV);