module.exports = {
  kod: "bilgi",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Bilgi Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**Tsunami Bot Bilgi**')
    .setDescription('Tsunami botu 14 kişilik TVT ekibi tarafından 1 yıl boyunca geliştirilen bir bottur. Kurucusu ise TVT-The Poseidon#61192 dir. Botun ana amacı sunucuda tek bot ile her işi halletmektir.')
    .setAuthor('Tsunami Bot')
    .setColor('#00ffff')
    .addField('Botumuzu oylayarak bizi destekleyebilirsiniz. :muscle:');
    message.channel.send(embed);
  }
}
