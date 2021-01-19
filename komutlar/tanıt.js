let { MessageEmbed } = require('discord.js');

module.exports = {

    kod: 'tanıt',
    kategori : 'kullanıcı',

    run: async (app, message, args) => {

        let  guildID = '779246823402373140'
        let  channelID = '788660212886274048'

        let reaportMessage = args.join(' ')
        if (!reaportMessage) return message.channel.send('**:pencil: Bu komutu kullanabilmeniz için sunucu özelliklerini belirtmelisiniz!**')

        let reaportMessageEmbed = new MessageEmbed()
        .addField('⚙️ Sunucu Özellikleri:', reaportMessage, true)
        .addField('👑 Sunucu Sahibi:', `${message.author.tag} ID = ${message.author.id}`, true)
        .addField(':jigsaw: Sunucu Adı:', message.guild.name)
        .addField(':link: Sunucu Davet Linki:', await message.channel.createInvite({ temporary: true }).then(i => i.url), true)
        .setColor('#00ffff')
        .setFooter('Tsunami Bot Tanıt Sistemi')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(app.user.username, app.user.avatarURL())

        message.channel.send('**:white_check_mark: Değerli kullanıcımız destek sunucumuzda sunucunuz tanıtıldı #sunucularınız kanalından kontrol edebilirsiniz.**')
        app.guilds.cache.get(guildID).channels.cache.get(channelID).send(reaportMessageEmbed)
    }
}
