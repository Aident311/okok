module.exports = (client) => {
  const channelId = '820802607831449616' // welcome channel
  const targetChannelId = '820802607831449612' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}