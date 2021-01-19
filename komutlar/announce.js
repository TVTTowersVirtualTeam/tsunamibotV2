const { MessageEmbed } = require("discord.js");
module.exports = {
kod: "announce",
description: "Botun Belirli Bir Kanalda İstediğinizi Söylemesini Sağlayın",
usage: "<kanal kimliği> <msg>",
run: async (bot, message, args) => {
  let rChannel = message.guild.channels.cache.get(args[0]);
  if (!rChannel)
    return message.channel.send(
      `⛔ To use this command, the ID of the channel to be announced is required!`
    );
  console.log(rChannel);
  let MSG = message.content
    .split(`${bot.prefix}anons ${rChannel.id} `)
    .join("");
  if (!MSG)
    return message.channel.send(`⛔ You did not specify your message to send!`);
  const _ = new MessageEmbed()
    .setTitle(`📢 A New Announcement`)
    .setDescription(`**${MSG}**`)
    .setColor("#00ffff");
  rChannel.send(_);
  message.delete();
},
};
