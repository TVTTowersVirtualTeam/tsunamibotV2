const Discord = require("discord.js");
module.exports = {
  kod: "oyla",
  description: "Oylama yapmanızı sağlar.",
  category: "yetkili",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `⛔ Bu komutu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısınız! ${message.author.username}`
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `⛔ Oylama Başlatılacak Kanal ID sini Belirtmediniz! / Belirtmeyi Unuttunuz!`
      );
    }
    let question = message.content
      .split(`${bot.prefix}anket ${channel} `)
      .join("");
    if (!question)
      return message.channel.send(`⛔ Bu komutu kullanabilmek için bir soru belirtmelisiniz!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`📊 **Yeni Bir Oylama!**`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} ✅ Bu anketi oluşturdu!`)
      .setColor(`#00ffff`);
    let msg = await bot.channels.cache.get(channel.id).send(Embed);
    await msg.react("✔️");
    await msg.react("❌");
  },
};
