module.exports = {
  kod: "p",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 P Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setColor("#00ffff")
      .setTitle(':chart_with_upwards_trend:  **Ping Düzeyi**')
      .addField('**:satellite:  Pingim:**', client.ws.ping + ' ms')
      message.channel.send(embed)
  }
}
