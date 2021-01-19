module.exports = {
  kod: "sınav-türkçe-kolay",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Sınav Türkçe Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**:man_teacher: Tsunami Yayınları Türkçe Yeni Nesil Soruları**')
    .addField('**:interrobang: 1. Soru = **Ağırdan almak, deyiminin anlamı nedir?**')
    .addField('**:interrobang: 2. Soru = **Acele işe şeytan karışır, atasözünün anlamı nedir?**')
    .addField('**:interrobang: 3. Soru = **Terim anlam nedir?**')
    .addField('**:interrobang: 4. Soru = **Mecaz anlam nedir?**')
    .addField('**:interrobang: 5. Soru = **29 Kasımda oynanan Fenerbahçe - Beşiktaş deribisinin kazananı kimdir, Terim anlam mıdır mecaz anlam mı?**')
    .addField('Botumuzu oylayarak bizi destekleyebilirsiniz. :muscle:')
    .setColor('#00ffff');
    message.channel.send(embed);
  }
}
