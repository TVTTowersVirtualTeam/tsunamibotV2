module.exports = {
  kod: "roblox",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Roblox Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 Roblox Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** 1 Eylül 2006')
    .addField('**Oyun Tasarımcısı =** Bilinmiyor')
    .addField('**Platformlar =** Microsoft Windows, Xbox One, Android, iOS, macOS, Fire OS, Mac OS')
    .addField('**Geliştirici Şirket =** Roblox Corporation')
    .addField('**Aldığı Ödüller =** Resmi Bir Ödülü Bulunmamakta')
    .addField('**Kategori =** Oyun Oluşturma Sistemi, RP')
    .addField('**Kaç Oyuncuya Sahip? =** Sistemim Çöker :)')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
