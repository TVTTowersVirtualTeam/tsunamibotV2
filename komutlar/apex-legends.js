module.exports = {
  kod: "apex-legends",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Apex Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎮 Apex Legends Oyunu**')
    .setColor('#00ffff')
    .addField('**İlk Piyasaya Sürülme Tarihi =** 4 Şubat 2019')
    .addField('**Oyun Tasarımcısı =** Mackey McCandlish')
    .addField('**Platformlar =** PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows')
    .addField('**Geliştirici Şirket =** Respawn Entertainment')
    .addField('**Aldığı Ödüller =** Multiplayer Oyun Dalında BAFTA Oyun Ödülü, The Game En İyi Çok Oyunculu Oyun Ödülü')
    .addField('**Kategori =** Battle Royale')
    .addField('**Kaç Oyuncuya Sahip? =** 30 Milyon Oyuncuya Sahip')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
