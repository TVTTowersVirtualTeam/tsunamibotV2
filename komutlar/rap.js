module.exports = {
  kod: "rap",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Rap Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎵 Rap Müziği**')
    .setColor('#00ffff')
    .addField('**Nedir? =** Bir Müzik Türü')
    .addField('**Açıklama =** Rap, Hip hop kültürünün müziğidir. Rapin yanı sıra, rap müziğin altyapılarını oluşturan DJ lik, bu kültürün dansı breakdance ve duvarlara şekiller ile yazı ve görsel çizilerek oluşturulan graffiti gibi Hip hopun dört ana sanat faaliyeti vardır.')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
