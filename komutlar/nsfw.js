module.exports = {
  kod: "nsfw",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Nsfw Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🔞 Tsunami Bot Nsfw Kategorisi**')
    .setColor('#00ffff')
    .setThumbnail('https://cdn.discordapp.com/attachments/797825611275698217/799193683265978418/Screenshot_8.png')
    .setDescription('**Dikkat:** Bu kategori **NSFW Kategorisidir** +18 yaş sınırında olmayanlar bu komutu kullanmamalıdır. Kötü sonuçlar çıkabilir. Lütfen 18 yaşında ve büyük kişiler kullansın komutu. **(NSFW KANALINDA KULLANIN)**')
    .addField('**:small_blue_diamond: t!anal |**', '`Bot size ANAL nsfw atar.`')
    .addField('**:small_blue_diamond: t!4k |**', '`Bot size 4k nsfw atar.`')
    .addField('**:small_blue_diamond: t!eşek |**', '`Bot size eşek nsfw atar.`')
    .addField('**:small_blue_diamond: t!uyluk |**', '`Bot size uyluk nsfw atar.`')
    .addField('**:small_blue_diamond: t!göğüsler |**', '`Bot size göğüsler nsfw atar.`')
    .addField('**:small_blue_diamond: t!hentai |**', '`Bot size hentai nsfw atar.`')
    .addField('**:small_blue_diamond: t!hentaiass |**', '`Bot size hentaiass nsfw atar.`')
    .addField('**:small_blue_diamond: t!solo |**', '`Bot size solo nsfw atar.`')
    .addField('**:small_blue_diamond: t!duvar-kağıdı |**', '`Bot size duvar kağıdı nsfw atar.`')
    .addField('**:small_blue_diamond: t!pgif |**', '`Bot size pgif nsfw atar.`')
    .addField('**:small_blue_diamond: t!erokemo |**', '`Bot size erokemo nsfw atar.`')
    .addField('**:small_blue_diamond: t!+18site |**', '`Bot size TR yasaklı olmayan siteler atar.`')
    .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
    [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
    [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
    message.channel.send(embed);
  }
}
