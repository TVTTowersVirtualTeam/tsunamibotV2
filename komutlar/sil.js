module.exports = {
  kod: "sil",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Sil Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    if (isNaN(args)) return message.reply('**:no_entry: Sil komutunu kullanabilmek için lütfen geçerli bir sayı giriniz!**');
    if (args < 2 || args > 100) return message.reply('**:no_entry: Bu komutu kullanabilmek için lütfen 2 ve 100 arasında bir sayı giriniz!**');
    message.channel.bulkDelete(Number(args))
    const { MessageEmbed} = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('**:white_check_mark: Başarıyla Mesajlar Silindi**')
    .setDescription('**:small_orange_diamond: Silinen Mesaj Sayısı:** ' + args)
    .setColor('#00ffff')
    message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 10000);
    })
  }
}
