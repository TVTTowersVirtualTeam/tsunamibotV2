const { MessageEmbed } = require('discord.js');

module.exports = {
    kod: "sunucu-bilgi",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setColor('#00ffff')
            .setTitle(`${message.guild.name} **Sunucu Bilgi**`)
            .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.')
            .addFields(
                {
                    name: "👑 Kurucu: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "👥 Üye Sayısı: ",
                    value: `Bu sunucuda toplam ${message.guild.memberCount} kişi mevcut!`,
                    inline: true
                },
                {
                    name: "👨‍👦 Çevrim İçi Üye: ",
                    value: `Şuan da sunucu da toplam ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} çevrim içi kullanıcı mevcut!`,
                    inline: true
                },
                {
                    name: "🤖 Bot Sayısı: ",
                    value: `Bu sunucuda toplam ${message.guild.members.cache.filter(m => m.user.bot).size} bot var ( En iyisi benim )!`,
                    inline: true
                },
                {
                    name: "📆 Oluşturulma Tarihi: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "⭐ Rol Sayısı: ",
                    value: `Bu sunucuda toplam ${message.guild.roles.cache.size} rol mevcut!`,
                    inline: true,
                },
                {
                    name: `🗺 Sunucu Bölgesi: `,
                    value: region,
                    inline: true
                },
                {
                    name: `✅ ❎ Doğrulanmış Sunucumu?: `,
                    value: message.guild.verified ? 'Doğrulanmamış Sunucu' : `Doğrulanmış Sunucu`,
                    inline: true
                },
                {
                    name: '🚀 Sunucuyu Yükseltme Sayısı: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Bu sunucunun ${message.guild.premiumSubscriptionCount} Yükselticileri!` : `Bu sunucu henüz yükseltilmemiş!`,
                    inline: true
                },
                {
                    name: "😀 Emoji Sayısı: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Bu sunucuda toplam ${message.guild.emojis.cache.size} emoji mevcut!` : 'Bu sunucuda henüz emoji bulunmuyor!' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
