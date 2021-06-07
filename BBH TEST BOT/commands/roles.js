const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const profileModel = require("../models/ProfileSchema");
const mongoose = require("mongoose");
const points = require('./points');
const prefix = process.env.PREFIX;



module.exports = {
    
  name: "roles",
  aliases: [],
  description: "getroles",
  async execute(client, message, args, Discord, profileData) {
    const UserPoints = profileData.points;
    const { guild } = message

    const member = guild.members.cache.get(message.member.id);
    if(!message.member.roles.cache.has("842914940473442311")) {// if he don't have normal division role
        member.roles.add("842914940473442311") //Adding Normal Divisions role
        member.roles.add("842914940473442312")//Adding Bronze role
        message.channel.send("Succesfully added Normal Division role & Bronze role")
    



                if(UserPoints >= 50) {//If user have 30 or more points
                    if(!message.member.roles.cache.has("842914940473442313")) {//And if he don't have Silver role
                        member.roles.add("842914940473442313") //Add Silver role
                        message.channel.send("succesfully added Silver role");


                        if(!message.member.roles.cache.has("842914940482617365")) {//If he don't have Gold role
                            if(UserPoints >= 100) {// And if he have 70 or more points
                                member.roles.add("842914940482617365") //Add Gold role
                                message.channel.send("succesfully added Gold role");


                                if(!message.member.roles.cache.has("842914940482617366")) {//If user don't have platinum role
                                    if(UserPoints >= 250) { //And if he have 150 or more points
                                        member.roles.add("842914940482617366") //Add Platinum Role
                                        message.channel.send("Succesfully added Platinum role")


                                        if(!message.member.roles.cache.has("842914940482617369")) { //If user don't have Diamond role
                                            if(UserPoints >= 400) {//And if he have 250 or more points
                                                member.roles.add("842914940482617369")//Add Diamond role
                                                member.roles.add("842914940482617367")//Add Elite divisions role
                                                message.channels.send("Succesfully added Diamond Role & Elite Division role")


                                                if(!message.member.roles.cache.has("842914940482617368")) {//If user don't have master role
                                                    if(UserPoints >= 600) {//If user have 450 or more points
                                                        member.roles.add("842914940482617368") //Add Master role
                                                        message.channel.send("Succesfully added Master role")


                                                        if(!message.member.roles.cache.has("842914940482617370")) {//If user don't have Champion role
                                                            if(UserPoints >= 950) { //If user have 800 or more points
                                                                member.roles.add("842914940482617370")//Add champion role! omg
                                                                message.channel.send(`Congratulations ${message.member} You have finally reached the top of top!\nAdded Champion role!`)
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
        }
    }
    else if(UserPoints >= 50) {//If user have 30 or more points
        if(!message.member.roles.cache.has("842914940473442313")) {//And if he don't have Silver role
            member.roles.add("842914940473442313") //Add Silver role
            message.channel.send("succesfully added Silver role");


            if(!message.member.roles.cache.has("842914940482617365")) {//If he don't have Gold role
                if(UserPoints >= 100) {// And if he have 70 or more points
                    member.roles.add("842914940482617365") //Add Gold role
                    message.channel.send("succesfully added Gold role");


                    if(!message.member.roles.cache.has("842914940482617366")) {//If user don't have platinum role
                        if(UserPoints >= 250) { //And if he have 150 or more points
                            member.roles.add("842914940482617366") //Add Platinum Role
                            message.channel.send("Succesfully added Platinum role")


                            if(!message.member.roles.cache.has("842914940482617369")) { //If user don't have Diamond role
                                if(UserPoints >= 400) {//And if he have 250 or more points
                                    member.roles.add("842914940482617369")//Add Diamond role
                                    member.roles.add("842914940482617367")//Add Elite divisions role
                                    message.channel.send("Succesfully added Diamond Role & Elite Division role")


                                    if(!message.member.roles.cache.has("842914940482617368")) {//If user don't have master role
                                        if(UserPoints >= 600) {//If user have 450 or more points
                                            member.roles.add("842914940482617368") //Add Master role
                                            message.channel.send("Succesfully added Master role")


                                            if(!message.member.roles.cache.has("842914940482617370")) {//If user don't have Champion role
                                                if(UserPoints >= 950) { //If user have 800 or more points
                                                    member.roles.add("842914940482617370")//Add champion role! omg
                                                    message.channel.send(`Congratulations ${message.member} You have finally reached the top of top!\nAdded Champion role!`)
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }
  }
};
