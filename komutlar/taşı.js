module.exports = {
  kod: "taşı",
  async run (client, message, args){
    const önerimesajı = message.content.split(' ').slice(1)
const öneri = önerimesajı.join(" ")
const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
kanal.send(öneri + ' **💾 Taşı Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send(':no_entry: **Bu komutu kullanabilmeniz için izne ihtiyacınız var!');
    const üye = message.mentions.members.first()
    if (!üye) return message.channel.send('**:pencil: Bu komutu kullanabilmek için bir kullanıcı ismi belirtmelisiniz!**')
    if (!üye.voice.channel) return message.channel.send(':no_entry: **Bahsettiğiniz kullanıcı sesli kanalda değil!**');
    if (message.member.voice.channel){
      message.channel.send(':white_check_mark: **Kullanıcı istenen ses kanalına başarıyla taşındı.**')
      üye.voice.setChannel(message.member.voice.channel.id)
    } else {
      if (!args[1]) return message.channel.send(':pencil: **Bu komutu kullanmak için bir kanal kimliği girmelisiniz!**')
      message.channel.send(':white_check_mark: **Kullanıcı istenen ses kanalına başarıyla taşındı.**');
      üye.vocie.setChannel(args[1])
    }
  }
}
