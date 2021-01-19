module.exports = {
  kod: "telif",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Telif Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**Tsunami Bot Telif Hakları Ve Bilgilendirme**')
    .setDescription('**Tsunami Bot Telif Hakkı (©) 2020 TVT**  ( Towers Virtual Team ) Bu botun içeriği, tasarımı ve botun içindeki tüm dokümanlara ait hakları saklıdır. Botun içerisinde yer alan komutların aksi belirtilmediği sürece, botun içindeki hiçbir komut unsurları ve diğer unsurlar izin alınmaksızın kopyalanamaz, başka yere taşınamaz, alıntı yapılamaz, internet üzerinde veya her ne şekilde olursa olsun yayınlanamaz ve kullanılamaz. Bu botu kullanan kullanıcılar, botun telif hakkı konusunda ID = 777142549037973524’ adlı Kurucunun tüm talep ve açıklamalarını kabul ettiklerini beyan ve taahhüt ederler. **Hakları saklı tutulmuş eserler, sahiplerinin muvafakati olmadan hiç bir suretle çoğaltılamaz, alıntı yapılamaz, yayınlanamaz, başka bir yerde kullanılamaz!**')
    .setAuthor('© Kodlar yasal haklar çerçevesince koruma altına alınmıştır.')
    .setColor('#00ffff');
    message.channel.send(embed);
  }
}
