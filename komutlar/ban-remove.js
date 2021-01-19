module.exports = {
  kod: "ban-remove",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Ban-Remove Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    let id = args[0]
    if (!message.member.hasPermission('BAN_MEMBERS')) return;
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
    if (isNaN(id)) return message.reply(':no_entry:  **Please enter a valid ID to use this command!**');
    message.guild.fetchBans().then(ban => {
      if (ban.size === 0) return message.reply(':no_entry:  **No one has ever been banned on this server!**');
      const banlanan = ban.find(b => b.user.id === id)
      if (!banlanan) return message.channel.send(':no_entry:  **This user is not banned on our server!**');
      message.guild.members.unban(banlanan.user)
      message.reply(':white_check_mark:  **The ban on this user has been successfully lifted!**')
    })
  }
}
