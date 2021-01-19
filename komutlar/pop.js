module.exports = {
  kod: "pop",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Pop Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎵 Pop Müziği**')
    .setColor('#00ffff')
    .addField('**Nedir? =** Bir Müzik Türü')
    .addField('**Açıklama =** Müzik türleri arasına çok sonradan dahil olmuştur, net bir özelliği yoktur. Değişen zaman ve müzik türleri arasında hızlıca yükselmiş ve uzun süre popüler kalmış şarkıları barındıran bir müzik türü olarak da nitelendirilebilir. Sanatçı kitlesi en fazla olan müzik türlerinden biridir. Dünya Michael Jackson, Madonna; Türkiye’de ise Sezen Aksu ve Tarkan pop müziğinin önemli sanatçılarından sayılabilir.')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
