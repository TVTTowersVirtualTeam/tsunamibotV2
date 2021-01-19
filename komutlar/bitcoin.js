module.exports = {
  kod: "bitcoin",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Bitcoin Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🏺 Bitcoin**')
    .setColor('#00ffff')
    .addField('**Bitcoin Nedir? =** Para Birimi')
    .addField('**Bitcoin Açıklama =** Bitcoin herhangi bir merkez bankası, resmi kuruluş, vs. ile ilişiği olmayan elektronik bir para birimidir. Virgülden sonra 100-milyonuncu basamağa kadar birimlere ayrılabilir. Ayrıca Derin Ağda en çok kullanılan para birimidir.')
    .addField('**Bitcoin Kurucusu =** Satoshi Nakamoto')
    .addField('**1 Bitcoin kaç Tl =** 1 Bitcoin = 151.658,27 Türk Lirası')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
