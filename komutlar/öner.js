let { MessageEmbed } = require('discord.js');

module.exports = {

    kod: 'öner',
    kategori : 'kullanıcı',

    run: async (app, message, args) => {

        let  guildID = '779246823402373140'
        let  channelID = '785073927008419840'

        let reaportMessage = args.join(' ')
        if (!reaportMessage) return message.channel.send(':pencil: **Bu komutu kullanabilmek için bir öneri belirtmelisiniz!**')

        let reaportMessageEmbed = new MessageEmbed()
        .addField(':incoming_envelope: Öneri Yazısı: :', reaportMessage, true)
        .addField(':bust_in_silhouette: Öneriyi Belirten Kullanıcı', `${message.author.tag} ID = ${message.author.id}`, true)
        .addField(':jigsaw: Kullanıcının Sunucusu:', message.guild.name)
        .addField(':link: Sunucu Davet Linki:', await message.channel.createInvite({ temporary: true }).then(i => i.url), true)
        .setColor('#00ffff')
        .setFooter('Öneri Sistemi')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(app.user.username, app.user.avatarURL())

        message.channel.send('**:white_check_mark: Değerli kullanıcımız öneri yazınız ekibimize başarı ile ulaştı en kısa sürede ekibimiz önerinizi değerlendirecektir. Botu geliştirmemizde yardımcı olduğunuz için size minettarız! **')
        app.guilds.cache.get(guildID).channels.cache.get(channelID).send(reaportMessageEmbed)
    }
}
