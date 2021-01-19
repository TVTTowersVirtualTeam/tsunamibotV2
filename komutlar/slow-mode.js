module.exports = {
  kod: "slow-mode",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Slow Mode Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const ms = require('rhino-ms')
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: **You need administartor permission to use this command**')
    const zaman = ms(args.join(" "), {birim: "saniye"})
    if (zaman > 21600 || zaman < 1) return message.channel.send(':no_entry: **To use this command enter 1 second to 6 hour time**')
    const slowmode = Math.floor(zaman)
    message.channel.setRateLimitPerUser(slowmode)
    message.channel.send(':stopwatch: **This channel with success' + args.join(" ") + ' has now have slow mode**')
  }
}
