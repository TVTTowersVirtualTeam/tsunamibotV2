const { MessageEmbed } = require('discord.js');

module.exports = {
    kod: "banned",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`${bans.size} `)
        })

    }
}
