const { MessageEmbed } = require('discord.js');

module.exports = {
    kod: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`**⛔ You are not allowed to ban the mentioned user!*`)
        }
        if (!args[0]) {
            return message.channel.send(`**📝 Please, a user to use this command!**`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.members.ban();
            await message.channel.send(`${member} **✅ Successfully banned with Named User Authorities!**`)
        } catch (e) {
            return message.channel.send(`**✅ Successfully banned with Named User Authorities!**`)
        }

    }
}
