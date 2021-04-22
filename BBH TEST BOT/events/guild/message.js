const profileModel = require("../../models/ProfileSchema");
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

module.exports = async (Discord, client, message) => {
  
  const prefix = process.env.PREFIX;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        points: 0,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }
  
  if(command) command.execute(client, message, args, Discord, profileData)
}