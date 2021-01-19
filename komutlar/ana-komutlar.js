module.exports = {
  kod: "ana-komutlar",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Ana-Komutlar Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🔎 Tsunami Bot Ana Komutlar Kategorisi**')
    .setColor('#00ffff')
    .setThumbnail('https://cdn.discordapp.com/attachments/788722559943966720/790860374290857984/Screenshot_60.png')
    .addField('**:small_blue_diamond: t!istatistik |**', '`Botun istatistiklerini gösterir.`')
    .addField('**:small_blue_diamond: t!ping |**', '`Botun pingini size gösterir.`')
    .addField('**:small_blue_diamond: t!telif-hakları |**', '`Botun telif haklarını gösterir.`')
    .addField('**:small_blue_diamond: t!gecikme |**', '`Botun gecikmesini gösterir.`')
    .addField('**:small_blue_diamond: t!bilgi-ver |**', '`Bot hakkında size bilgi verir.`')
    .addField('**:small_blue_diamond: t!davet-et |**', '`Botun davet linkini size gönderir.`')
    .addField('**:small_blue_diamond: t!destek |**', '`Destek Ekibinden yardım istersiniz.`')
    .addField('**:small_blue_diamond: t!şikayet |**', '`Botu veya yetkiliyi şikayet edersiniz.`')
    .addField('**:small_blue_diamond: t!hata |**', '`Komutu kullanarak geliştirici ekibine Botun bir hatası varsa bildirirsiniz.`')
    .addField('**:small_blue_diamond: t!öner |**', '`Komutu kullanarak botu geliştirmemizde bize katkı sağlaya bilirsiniz.`')
    .addField('**:small_blue_diamond: t!oy-ver |**', '`Botun oy linklerini atar.`')
    .addField('**:small_blue_diamond: t!destek-sunucusu |**', '`Botun destek sunucu linkini atar.`')
    .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
    [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
    [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
    message.channel.send(embed);
  }
}
