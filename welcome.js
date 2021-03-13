module.exports = (client) => {
  const channelId = "810893317311037450";
  const rulesChannel = "794083029558755348";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${
      member.id
    }> to TechnoCraft!! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
