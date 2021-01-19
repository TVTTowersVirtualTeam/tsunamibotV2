module.exports = {
  kod: "pubg",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Pubg Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 Pubg Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** 30 Temmuz 2016')
    .addField('**Oyun Tasarımcısı =** Brendan Greene')
    .addField('**Platformlar =** PlayStation 4, Nintendo Switch, Xbox One, Android, iOS, Microsoft Windows, Mac OS')
    .addField('**Geliştirici Şirket =** PUBG Corporation, Krafton')
    .addField('**Aldığı Ödüller =** The Game En İyi Çok Oyunculu Oyun Ödülü')
    .addField('**Kategori =** Battle Royale')
    .addField('**Kaç Oyuncuya Sahip? =** 400 Milyon Oyuncuya Sahip')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
