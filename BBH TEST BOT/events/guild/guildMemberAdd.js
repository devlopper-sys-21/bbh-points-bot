const profileModel = require("../../models/ProfileSchema");

module.exports = async (client, discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    points: 0,
    bank: 0,
  });
  profile.save();
};
