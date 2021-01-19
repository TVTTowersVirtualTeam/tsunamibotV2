const { MessageEmbed } = require("discord.js");
module.exports = {
  kod: "raporla",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(`Hayır.`);
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`⛔ Raporlanacak Bir kullanıcıdan bahsetmediniz!`);
    } else {
      let Reason = message.content.slice(bot.prefix.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `⛔ Rapor için bir sebeb belirtmediniz!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "raporlar"
      );
      if (!Channel)
        return message.channel.send(
          `Bu sunucuda raporlar adlı bir kanal bulunmamakta! \`rapor\``
        );
      let Embed = new MessageEmbed()
        .setTitle(`📠 Yeni Bir Rapor!`)
        .setDescription(
          `Moderatör \`${message.author.tag}\` kullanıcı bu moderatör yorumunu bildirdi. \`${User.tag}\`! `
        )
        .setColor(`#00ffff`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Mod ID", value: `${message.author.id}`, inline: true },
          { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};
