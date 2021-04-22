const Discord = require('discord.js');
const fs = require('fs');
const prefix = "?";
const jsonfile = require("jsonfile");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const mongoose = require("mongoose");
require("dotenv").config();


/*
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Made by Oxzify#0093");
  });

*/
[ "command_handler", "event_handler" ].forEach(handler=>{
  require(`./handlers/${handler}`)(client, Discord);
})


/*
  //commands
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    if(!message.content || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
      client.commands.get('help').execute(message, args);
    }
    else if(command === 'leaderboard'){
        client.commands.get('leaderboard').execute(message, args);
      }
    else if(command === 'balance'){
        client.commands.get('balance').execute(message, args);
      }
});


mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(()=>{
  console.log("Connected to the database.");
}).catch((err)=>{
  console.log(err);
});
*/
mongoose.connect('mongodb://localhost:27017/DiscordBotDB', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log("Connected to the database");
}).catch((err)=>{
  console.log(err);
});







client.login(process.env.DISCORD_TOKEN);