module.exports = {
  kod: "pes",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Pes Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 Pes Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** 1985 Yılı')
    .addField('**Oyun Tasarımcısı =** Konami')
    .addField('**Platformlar =** PlayStation 4, Nintendo Switch, Xbox One, Android, iOS, Microsoft Windows, Mac OS')
    .addField('**Geliştirici Şirket =**  Konami, NAVER Corporation')
    .addField('**Aldığı Ödüller =** Bilinmiyor')
    .addField('**Kategori =** Spor, Futbol')
    .addField('**Kaç Oyuncuya Sahip? =** 250 Milyon Oyuncuya Sahip')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
