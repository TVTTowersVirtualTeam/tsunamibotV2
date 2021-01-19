module.exports = {
  kod: "oy-ver",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Oy Ver Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**:comet: Tsunami Bot Oy Linki**')
    .setDescription('https://discordbotlist.com/bots/tsunami-6689 **Hızlı ol ve oy ver bu bizi yukarlara taşıyacak! :fire:**')
    .setColor('#00ffff');
    message.channel.send(embed);
  }
}
