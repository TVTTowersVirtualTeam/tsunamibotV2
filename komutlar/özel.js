module.exports = {
  kod: "maserati",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Özel Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**:grinning: Gözde Çiçeğimiz!!!**')
    .setColor('#00ffff')
    .addField('**Açıklama =** Merhaba değerli Alperen izleyicileri ben Tsunami. Burada olmamın sebebi çok değerli Alperenin beni tanıtmasıdır bende jest için onun hesaplarını tanıtacağım. Hepinizi seviyoruz sayıyoruz **İYİ YILLAR DİLERİZ!**')
    .addField('**Youtube =** https://www.youtube.com/channel/UCoc40DU9WGuu7Y2To5URo6A')
    .addField('**Youtube 2 =** https://www.youtube.com/channel/UCZ3lauNTz-flaBUn3H8MPTw')
    .addField('**Discord =** https://discord.gg/fSc2jVVsFq')
    .addField('**Bitiş =** Kanala Abone Ol Videoyu Beğen Beni de Sunucuna Eklersin Be Caaaniiim :)))))')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
