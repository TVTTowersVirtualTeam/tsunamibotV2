const Discord = require('discord.js');
const modül = require('sozluk-api');

module.exports = {
  kod: "tdk",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Tdk Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
if(!args[0]) return message.reply('**📝 Bu komutu kullanabilmek için bir kelime girmelisin!**')
let kelime = await modül.tdk(args[0])
const embed = new Discord.MessageEmbed() //v11 kullanıyorsanız Discord.RichEmbed() yapınız.
.setColor('#00ffff')
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/5/51/Türk_Dil_Kurumu_logo.png')
.addField('📄 Kelime Anlamı:', kelime.anlam)
.addField('©️ Kelime Lisanı:', kelime.lisan)
.addField('👨🏼‍🏫 Kelime Örneki:', `${kelime.örnek} -**${kelime.Yazar}**`)
.addField('👳🏼‍♂️ Kelime Atasözü:', kelime.Atasözü)
.addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
[🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
[☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
message.channel.send(embed)
}
}
