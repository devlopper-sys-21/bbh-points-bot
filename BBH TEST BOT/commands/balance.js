const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const profileModel = require("../models/ProfileSchema");
const mongoose = require("mongoose");
const prefix = process.env.PREFIX;

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",

    execute(client, message, args, Discord, profileData) {
      Pointsembed = new Discord.MessageEmbed()
       .setTitle("Points")
       .setDescription(`You have ${profileData.points} points.`)
       .setThumbnail("https://media.discordapp.net/attachments/786777556476624957/845791867773386772/ClipartKey_399261.png?width=448&height=448")
      message.channel.send(Pointsembed);
    },
  };