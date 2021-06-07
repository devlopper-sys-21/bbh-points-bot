const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const profileModel = require("../models/ProfileSchema");
const mongoose = require("mongoose");
const prefix = process.env.PREFIX;

module.exports = {
    name: "points",
    aliases: ["pts", "pt"],
    permissions: [],
    description: "Check the user balance",

    execute(client, message, args, Discord, profileData) {
      Pointsembed = new Discord.MessageEmbed()
       .setTitle("Points")
       .setDescription(`You have ${profileData.points} points.`)
       .setThumbnail("https://media.discordapp.net/attachments/818901790593777745/845792544825802803/ebe0bab5a16088b7f66a806a7f522b23.png?width=448&height=448")
       .setColor("#fcd303")
      message.channel.send(Pointsembed);
    },
  };