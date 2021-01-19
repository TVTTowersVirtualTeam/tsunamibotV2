module.exports = {
  kod: "rsg",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 RSG Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 Tom Clancys Rainbow Six Siege Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** 7 Nisan 2015')
    .addField('**Oyun Tasarımcısı =** Daniel Drapeau, Chris Lee, Andrew Witts')
    .addField('**Platformlar =** PlayStation 4, Xbox One, Xbox X ve S Serisi, PlayStation 5, Microsoft Windows')
    .addField('**Geliştirici Şirket =** Ubisoft Montreal')
    .addField('**Rakip Oyun =** Valorant, Csgo')
    .addField('**Aldığı Ödüller =** The Game Award for Best ESports Game')
    .addField('**Kategori =** Fps')
    .addField('**Kaç Oyuncuya Sahip? =** 35 Milyon Oyuncuya Sahip')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
