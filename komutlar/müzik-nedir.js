module.exports = {
  kod: "müzik-nedir",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Müzik Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎵 Müzik**')
    .setColor('#00ffff')
    .addField('**Nedir? =** Sesli Eylem')
    .addField('**Açıklama =** Müzik ya da musiki, en genel tanımı ile sesin biçim ve anlamlı titreşimler kazanmış halidir. Başka bir deyiş ile de müzik, sesin ve sessizliğin belirli bir zaman aralığında ifade edildiği sanatsal bir formdur.')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
