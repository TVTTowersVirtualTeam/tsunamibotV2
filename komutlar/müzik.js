module.exports = {
  kod: "müzik",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Müzik Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🎵 Müzik Kategorisi**')
    .setColor('#00ffff')
    .setThumbnail('https://cdn.discordapp.com/attachments/788722559943966720/790857579274043422/Screenshot_21.png')
    .addField('**:small_blue_diamond: t!çal |**', '`Bot Girdiğiniz URL yi sesli kanalda çalar.`')
    .addField('**:small_blue_diamond: t!dinleyici-ara |**', '`Bot Dinleyici arkadaş arar.`')
    .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
    [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
    [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
    message.channel.send(embed);
  }
}
