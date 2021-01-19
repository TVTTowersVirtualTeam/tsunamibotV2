let { MessageEmbed } = require('discord.js');

module.exports = {

    kod: 'şikayet',
    kategori : 'kullanıcı',

    run: async (app, message, args) => {

        let  guildID = '779246823402373140'
        let  channelID = '781972941058342922'

        let reaportMessage = args.join(' ')
        if (!reaportMessage) return message.channel.send('**:pencil: Bu komutu kullanabilmeniz için lütfen bir şikayet belirtiniz!**')

        let reaportMessageEmbed = new MessageEmbed()
        .addField(':incoming_envelope: Kullanıcı Şikayeti:', reaportMessage, true)
        .addField(':bust_in_silhouette: Şikayetçi Kullanıcı:', `${message.author.tag} ID = ${message.author.id}`, true)
        .addField(':jigsaw: Kullanıcının Sunucusu:', message.guild.name)
        .addField(':link: Sunucu Davet Linki:', await message.channel.createInvite({ temporary: true }).then(i => i.url), true)
        .setColor('#00ffff')
        .setFooter('Şikayet Sistemi')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(app.user.username, app.user.avatarURL())

        message.channel.send('**:white_check_mark: Değerli kullanıcımız şikayetiniz başarıyla ekibimize ulaştı ekibimiz şikayeti değerlendirip gereken çalışmayı gösterecektir botumuzu geliştirmek de bize yardımcı olduğunuz için size çok teşekkür ederiz!**')
        app.guilds.cache.get(guildID).channels.cache.get(channelID).send(reaportMessageEmbed)
    }
}
