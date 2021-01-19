module.exports = {
  kod: "battlefield",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Battlefield Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 BattleField Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** Bilinmiyor')
    .addField('**Oyun Tasarımcısı =** EA Digital Illusions CE, Visceral Games, David Goldfarb, Ross Darvill, Nathalie Ek, Daniel Berlin')
    .addField('**Platformlar =** PlayStation 4, Xbox One, Xbox X ve S Serisi, PlayStation 5, Microsoft Windows')
    .addField('**Geliştirici Şirket =** Electronic Arts, EA Digital Illusions CE')
    .addField('**Aldığı Ödüller =** Kalplerin Kupası :)')
    .addField('**Kategori =** Fps')
    .addField('**Kaç Oyuncuya Sahip? =** 60 Milyon Oyuncu Ve Ötesi')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
