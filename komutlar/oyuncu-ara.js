module.exports = {
  kod: "oyuncu-ara",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Oyuncu Ara Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const game = args[0]
    if (!game) return message.reply('**:pencil: Bu komutu kullanabilmek için bir oyun adı belirtmelisiniz!**')
    const nott = message.content.split(' ').slice(2)
    const not = nott.join("")
    if (!not) return message.reply(':pencil: Bu komutu kullanabilmek için bir not belirtmelisiniz!');
    if (message.member.voice.channel) {
      const Discord = require('discord.js')
      const embed = new Discord.MessageEmbed()
      .setTitle(`:bangbang: **Oyuncu Arıyor:** ${message.author.tag}`)
      .setColor("#00ffff")
      .addField(":video_game: **Oyuncu Aradığı Oyun:**", `${game}`)
      .addField(':jigsaw: **Sesli Kanal:**', `${message.member.voice.channel}`)
      .addField(":notepad_spiral: **Not:**", `${not}`);
      message.channel.send(embed)
    } else {
   message.reply(':no_entry: **Bu komutu kullanmadan önce her hangi bir sesli kanala katılmalısınız!**')
    }
  }
}
