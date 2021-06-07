const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const profileModel = require("../models/ProfileSchema");
const mongoose = require("mongoose");
const prefix = process.env.PREFIX;




module.exports = {
    
  name: "give",
  aliases: [],
  description: "give a player some points",
  async execute(client, message, args, Discord, profileData) {
      
    if (!message.member.roles.cache.has('842914940493889580')) return message.channel.send("You don't have the permission to use this command! :thumbsdown: ");
    else {
        message.channel.send("You have the right permissions :thumbsup: ")
    }
    if (!args.length) return message.channel.send("You need to mention a player to give them points");
    
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Amount of points to give must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            points: amount,
          },
        }
      );

      return message.channel.send(`This player has been given ${amount} points!`);
    } catch (err) {
      console.log(err);
    }
  },
};
