module.exports = {
    kod: "avatar",
    async run (client, message, args) {
      const önerimesajı = message.content.split(' ').slice(1)
      const öneri = önerimesajı.join(" ")
      const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
      kanal.send(öneri + ' **💾 Avatar Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
            .setTitle(':military_medal: **"Its the best avatar Ive ever seen!"**')
            .setColor('#00ffff')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setTitle(':military_medal: **Its the best avatar Ive ever seen!**')
            .setColor('#00ffff')
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
            message.channel.send(embed)
        }
    }
}
