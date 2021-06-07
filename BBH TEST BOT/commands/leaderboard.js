const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const profileModel = require("../models/ProfileSchema");
const mongoose = require("mongoose");
const prefix = process.env.PREFIX;

module.exports = {
    name: "leaderboard",
    aliases: ["lb", "lbs"],
    permissions: [],
    description: "show user the leaderboard",

    execute(client, message, args, Discord, profileData) {
      Pointsembed = new Discord.MessageEmbed()
       .setTitle("Leaderboard")
       .setDescription(`**---------Champion---------**\n\n**---------Master---------**\n\n**---------Diamond---------**\n\n**---------Platinum---------**\nhiguys - 355 points\n\n**---------Gold---------**\nNotSamir - 145 points\nLexion - 185 points\nExodiym - 135 points\n\n\n**---------Silver---------**\n\n\n**---------Bronze---------**\nrealrobot12 - 20 points\nFeather - 20 points\ncade - 15 points\nVoiD_NeXusTTV - 20 points\nMichael122333445 - 20 points\ndx_co - 20 points\nTiepomfy_Youtube - 20 points`)
       .setThumbnail("https://media.discordapp.net/attachments/818923788518424626/846002916019535892/free-medal-icon-1369-thumb.png?width=448&height=448")
       .setColor("#ffb854")
      message.channel.send(Pointsembed);
    },
  };