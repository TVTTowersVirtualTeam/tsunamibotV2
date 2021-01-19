module.exports = {
  kod: "altın",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Altın Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**💰 Altın**')
    .setColor('#00ffff')
    .addField('**Altın Nedir? =** Altın Birimi')
    .addField('**Altın Açıklama =** Altın, kimyada Au sembolü ile gösterilen yumuşak, parlak sarı renkte kimyasal bir element. Altının parlak sarı rengi, asitlere karşı dayanıklılığı, doğada serbest halde bulunabilmesi ve kolay işlenebilmesi gibi özellikleri, insanların ilkçağlardan beri ilgisini çekmiştir.')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
