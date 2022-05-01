// pulls in the dotenv library to allow access to .env files
require('dotenv').config()

// pulls in the disocrd.js lib
const Discord = require('discord.js')
// creates a client to interact with the discord API using the discord.js lib
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

BOT_PREFIX = '!'
GREEN_ME_CMD = 'green-me'

// executes when the ready event is fired
client.on('ready', () => {
  console.log('bot is ready and raring to go!')
})

client.on('messageCreate', msg => {
  if(msg.content === `${BOT_PREFIX}${GREEN_ME_CMD}`) {
    greenUserText(msg.member)
    
  }
})

function greenUserText(member) {
  member.roles.add('970398701652701244')
}

// connects to the bot
client.login(process.env.BOT_TOKEN)