module.exports = {
  kod: "at",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 At Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            const kanal = message.guild.channels.cache.find(ch => ch.name === 'log-kanalı')
            const embed = new MessageEmbed()
            .setTitle('**:boxing_glove:  ATILMA OLAYI**')
            .setDescription(':clapper:  **Olay:** `**Sunucudan Atılma**`')
            .addField(':bust_in_silhouette: **Atılan Kullanıcı**:', member)
            .setColor('#00ffff')
            .addField(':scroll:  **Atılma Sebebi**:', neden)
            kanal.send(embed)
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('**⛔ Botun izinlerini lütfen kontrol edin. YÖNETİCİ yetkisi olmayabilir.**');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("**⛔ Bu sunucuda böyle bir kullanıcı mevcut değil!**");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("**📝 Bu komutu kullanabilmeniz için atılacak kullanıcıyı belirtmeniz gerekir!**");
    }
  }
}
