module.exports = {
  kod: "açıklama",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Açıklama Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔ Bu komutu kullanabilmek için **Mesajları Yönet** Yetkisine sahip olmalısınız!');
    if (!message.member.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔ Bu komutu kullanabilmek için Yeterli Yetkim yok!');
    if (!args[0]) return message.channel.send('📝 Bu komutu kullanabilmek için Kanal Açıklamasını yazmalısınız!')
    message.channel.setTopic(args.join(" "))
    message.channel.send('✅ Başarı ile <#' + message.channel.id + '> 📝 Kanal Açıklaması: **' + args.join(" ") + '**oldu..')
  }
}
