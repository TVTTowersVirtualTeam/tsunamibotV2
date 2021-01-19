const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    kod: 'rol-bilgi',
    run: async (client, message, args) => {
        // code starts here
        try {
            const roleName = message.guild.roles.cache.find(r => (r.name === args.toString()) || (r.id === args.toString()))
            console.log(roleName)
            const perms = new Permissions(roleName.permissions.bitfield).toArray()

            const embed = new MessageEmbed()
                .setColor(roleName.color)
                .setTitle(roleName.name)
                .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.')
                .addFields(
                    {
                        name: '🆔 Rol ID: ',
                        value: roleName.id,
                        inline: true
                    },
                    {
                        name: '🏷️ Rol İsmi: ',
                        value: roleName.name,
                        inline: true
                    },
                    {
                        name: '✅ ❎ Etiketlenebilir mi?: ',
                        value: roleName.mentionable ? 'Evet' : 'Hayır',
                        inline: true
                    },
                    {
                        name: '✡️ Rol İzinleri: ',
                        value: perms.join(' ')
                    }
                )

            await message.channel.send(embed)

        } catch (e) {
            return message.channel.send('Role Doesn\'t Exist').then(() => console.log(e))
        }

    }
}
