const Discord = require('discord.js'); // discord.js modülü tanımlıyoruz.
const client = new Discord.Client(); // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { Client, MessageEmbed } = require('discord.js'); //tanımlamalar
const işaret = require('./işaret.json'); //tanımlamalar
const hedefimiz = require('./hedef.json'); //tanımlamalar
const { join } = require('path'); // tanımlamalar
const AsciiTable = require("ascii-table");

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "t!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    console.log('Tsunami Bot Şuan da Tüm Sunucularda Çevrim İçi!')
    const durumlar = [
      "Prefix = **t!**",
      "📌 Geliştirme Aşamasında!",
      "🌊 Tsunami Bot",
      "👥 70.000 Kullanıcı Sayısı!!!",
      "🧩 Tsunami Bot 110 Sunucuya Hizmet Veriyor!",
      "📌 0.1 Versiyonu Yakında!",
      "📝 t!yardım - Bot Komutlarımızı göre bilirsiniz!",
      "🛠 t!yetkili - Botun Yetkili komutlarını gösterir!",
      "🎠 t!eğlence - Botun Eğlence komutlarını gösterir!",
      "👤 t!kullanıcı - Botun Kullanıcı komutlarını gösterir!",
      "🎵 t!müzik - Botun Müzik komutlarını gösterir!",
      "🔒 t!güvenlik - Botun Güvenlik komutlarını gösterir! ( Geliştirme Aşamasında )",
      "🎮 t!oyun - Botun Oyun komutlarını gösterir!",
      "💸 t!ekonomi - Botun Ekonomi komutlarını gösterir!",
      "😀 t!emoji - Botun Emoji komutlarını gösterir!",
      "📞 Hızlı ve Yetenekli bir destek ekibimiz var.",
      "🆕 Her 1 haftada 2 yeni küçük geliştirme her 1 ay da orta çaplı geliştirme her 3 ay da ise yeni sürüm.",
      "🟢 Botumuz sizin için 7/24 aktif.",
      "📡 Botumuzun gecikmesi en az düzeyde ve çok hızlı bir sistemi var.",
      "💻 Botumuz 1 yıldır geliştiriliyor olsa da piyasa ya yeni sürülmüş bir bot yani yeni özellikler mevcut.",
      "🇹🇷 Botumuz tamamen Türkçedir yabancı bir kelime yoktur ama botun kullanım artışına göre yabancı versiyonlar eklenecektir.",
      "🛡️ Botumuz üstün bir güvenlik sistemi vardır asla kişisel özellikleriniz çalınmaz bunun için ekibimiz gayretli bir şekilde çalışmaktadır en üst düzey güvenliğinizi sağlarız.",
      "💙 Her zaman önceliğimiz sizlersiniz!!!",
      "VDS Sponsoru aranmaktadır Bot 70k Kullanıcı 100 sunucu dbl onay bulunmakta.",
      "📍 #tvt",
      "📍 #towersvirtualteam",
      "📍 #tsunami",
      "📍 tsunamibot",
      "📍 dcevimiztsunamibabamız",
      "📍 #unutmayınönceliğimizsizlersiniz",
      "📍 #birbaşkagüzeltsunami",
      "⚙️ t!ana-komutlar - Botun Ana Komutlarını gösterir!",
      "⛑ t!destek - 7/24 Aktif Destek Ekibi!",
      "📨 t!davet - Tsunami Bot Davet linkini alırsınız.",
      "🗳 t!oy-ver - Tsunami Bot Oy linkini alırsınız.",
      "📞 t!destek-sunucusu - Destek Sunucusu davet linkini alırsınız.",
      "🆕 - Deneme Sürümü!",
      "📡 t!ping - Botun pingini ölçersiniz!",
      "📡 t!gecikme - Botun gecikmesini ölçersiniz!",
      "t!tanıt - Destek Sunucumuzda kendi sunucunuzu tanıtırsınız!",
      "📉 t!istatistik - Botun istatistiklerini görürsünüz!",
      "https://discord.gg/S4YtFAjRk8 - Haydi bekleme sunucumuza katıl!",
      "https://discordbotlist.com/bots/tsunami-6689 - Haydi bekleme bota oy ver!",
      "t!öner - Geliştirici ekibimize öneride bulunursunuz.",
      "t!şikayet - Geliştirici ekibimize şikayet de bulursunuz.",
      "t!hata - Geliştirici ekibimize bot hatalarını söylersiniz.",
      "🌊 Tsunami Bot",
      "🖥 Baş Geliştirici = TVT-The Poseidon#6119",
      "🏫 Kurucu Şirket = (TVT) Towers Virtual Team",
      "✪ Kurucu = TVT-The Poseidon#6119",
      "💼 Yönetici = Mr.Ömer\15#9773",
      "💼 Yönetici = Dizayn#3274",
      "☎️ Baş Destek Ekibi = -VESSELAM-#7461"
    ]
    setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000);
  client.user.setStatus('online')
});

client.on('error', error => {
	 console.error('Websocket bağlantısı bir hatayla karşılaştı:', error);
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`:no_entry:  Komut dosyamda maalesef **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

module.exports = client => {
  console.log(`Yeniden başlatılıyor ${new Date()}`);
};

module.exports = client => {
  console.log(`Bağlantın Koptu! ${new Date()}`);
};

client.on("message", async (message , bot) => {
if (message.content.toLowerCase() === prefix + 'spotify') {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }

    let convert = require('parse-ms')

    let status = user.presence.activities[0];

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("⛔ Bu kullanıcı şuanda Müzik Dinlemiyor.");


      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          url = `https://open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = status.timestamps.start,
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);

      let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
      let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;

      let time = `${minutes}:${seconds}`;

      const embed = new Discord.MessageEmbed()
      .setAuthor("📃 Spotify Parça Bilgisi", "https://image.flaticon.com/icons/png/512/2111/2111624.png")
      .setColor(0x1ED768)
      .setThumbnail(image)
      .addField("🔖 İsim:", name, true)
      .addField("🗃 Albüm:", album, true)
      .addField("😎 Şarkıcı:", artist, true)
      .addField("⏲️ Süre:", time, false)
      .addField("🔗 Spotifyda Dinle!", `[\`${artist} - ${name}\`](${url})`, false)
      message.channel.send(embed)

  }
})

client.on('ready', () => {
    setInterval(() => {
        dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
    }, 1800000);
});

const AutoPoster = require('topgg-autoposter')

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OTIzMDY5Mjk2MDYzMjgzMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MDA0NDQ2fQ.VGuUE4zNF3VLFXmn3C_yXViXH32jSMMs1R4HSU52W7Y', client) //

client.on('message', message => {
  if (message.content.toLowerCase() === 'tsunami') {
    const kanal = new MessageEmbed()
    .setTitle(':ocean: Tsunami Bot Kategoriler')
    .setDescription(':white_small_square: Botumuz size öncelik tanır ve bu yüzden Tsunami Bot kullanıcılarına bazı özel komutlar verir. **t!hata** Komutu ile geliştirici ekibine Botun bir hatası varsa bildirebilirsiniz. Botumuz hakkında bir yardıma ihtiyaç duyuyorsanız **t!destek** Komutunu kullanarak Destek Ekibimizden yardım alabilirsiniz sunucunuza Destek Ekibi gelir ve sorununuzu çözer. Eğer botta bir eksiklik görüyorsanız **t!öner** Komutunu kullanıp Tsunami Botun gelişimine katkı sağlayabilirsiniz. Botu şikayet etmeniz gerekiyorsa **t!şikayet** komutunu kullanabilirsiniz. **#unutmayınönceliğimizsizlersiniz!**')
    .setColor('#00ffff')
    .addField('**🔹 :pencil: | t!yardım |**',
      'Botun Komut Kategorisini gösterir.' , true
    )
    .addField('**🔹 🛠 | t!yetkili |**',
      'Botun Yetkili Komutlarını gösterir.', true
    )
    .addField('**🔹 🔩 | t!sistem |**',
      'Botun Sistem Komutlarını gösterir.', true
    )
    .addField('**🔹 🎠 | t!eğlence |**',
      'Botun Eğlence Komutlarını gösterir.' ,true
    )
    .addField('**🔹 🔞 | t!nsfw |**',
      'Botun Nsfw Komutlarını gösterir.' ,true
    )
    .addField('**🔹 :bust_in_silhouette: | t!kullanıcı |**',
      'Botun Kullanıcı komutlarını gösterir.' , true
    )
    .addField('**🔹 :musical_note: | t!müzik |**',
      'Botun Müzik komutlarını gösterir.' , true
    )
    .addField('**🔹 🔒 | t!güvenlik |**',
      'Botun Güvenlik komutlarını gösterir.' , true
    )
    .addField('**🔹 :mag_right: | t!ana-komutlar |**',
      'Botun Ana komutlarını gösterir.' , true
    )
    .addField('**🔹 :video_game: | t!oyun |**',
      'Botun Oyun komutlarını gösterir.', true
    )
    .addField('**🔹 :money_with_wings: | t!ekonomi |**',
      'Botun Ekonomi komutlarını gösterir.', true
    )
    .addField('**🔹 :grinning: | t!emoji |**',
      'Botun Emoji komutlarını gösterir.', true
    )
    .setImage("https://cdn.discordapp.com/attachments/788722559943966720/790615857737760778/Screenshot_320.png")
    .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
    [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
    [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
    message.channel.send(kanal);
  }
});

client.on('guildCreate', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(':ocean: **Bizi sunucunuza eklediğiniz için sizlere teşekkür ederiz eğer bir sorun yaşarsanız **!destek** komutunu kullana bilirsiniz ya da destek sunucumuz da yardım isteyebilirsiniz destek ekibimiz sizinle ilgilenecektir, sunucunuzu çok daha yükseklere taşıyacağız buna söz veriyoruz Tsunami Sözü!**')
  .setDescription(':pushpin: **Sunucu Adı:** `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle(':new: **Yeni Sunucu**')
  .setDescription(':pushpin: **Sunucu Adı:** ' + guild.name)
  .setColor('#00ffff')
  .addField(':family_mwbb: **Kişi Sayısı:**', guild.memberCount)
  .addField(':briefcase: **Sunucu Sahibi:**', guild.owner)
  .setThumbnail(guild.iconURL)
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '785076098903834644')
  channel.send(embed2)
})

client.on('guildDelete', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(':smiling_face_with_tear: **Bizi sunucunuzdan çıkardığınız için Üzgünüz umarım tekrar bizi sunucunuza eklersiniz görüşmek dileğiyle.**')
  .setDescription(':pushpin: **Sunucu Adı:** `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle(':new: **Bir Sunucudan Çıktım**')
  .setDescription(':pushpin: **Sunucu Adı:** ' + guild.name)
  .setColor('#00ffff')
  .addField(':family_mwbb: **Kişi Sayısı:**', guild.memberCount)
  .addField(':briefcase: **Sunucu Sahibi:**', guild.owner)
  .setThumbnail(guild.iconURL)
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '785079323178696714')
  channel.send(embed2)
})

client.on('message', message => {
  if (message.content.toLowerCase() === 'aptal') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'öküz') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'kral-ol') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/PicbhaQgBLSIDXuRPt/giphy.gif')
    .setDescription('**🤣 Sen kim kral olmak kim?**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'nah-çek') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif')
    .setDescription('**🖕 Al sana nah!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'polisten-kaç') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/Y1wZw5cEyg1pVE6Ogh/giphy.gif')
    .setDescription('**🚨 Bir atasözü der ki Polisten Kaçın!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'polis-ol') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/3o6nV65f3qbBSKzOTu/giphy.gif')
    .setDescription('**👮🏽 Sen artık iyilerin dostu kötülerin düşmanısın!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'doktor-ol') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/Q7G9hEB1LxWMv2vGR1/giphy.gif')
    .setDescription('**🚑 Senin artık görevin insanları iyileştirmek!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'hackle') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/8WeatsYCC54TC/giphy.gif')
    .setDescription('**👨🏿‍💻 Aman Tanrım Hackledin Onu!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'öldür') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/AHMHuF12pW4b6/giphy.gif')
    .setDescription('**☠️ Komutla öldürmek ne ki? Füze atsaydın!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'alkışla') {
    message.delete()
    const kanal = new MessageEmbed()

    .setImage('https://media.giphy.com/media/oOeebgCiSFOeMYthoA/giphy.gif')
    .setDescription('**👏 Çok büyük tahtan eksik, Aferim tebrikler çok büyük başarı!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});


client.on('message', message => {
  if (message.content.toLowerCase() === 'amk') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'amık') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oç') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oruspu') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'şerefsiz') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'yavşak') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'göt') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'bok') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'gerizekalı') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'velet') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sg') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sikit git') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'puşt') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'göt') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'siktir') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'puşt') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'amına koyum') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'amına goyum') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'piç') {
    message.delete()
    const kanal = new MessageEmbed()

    .setDescription('**Ben buradayken küfür etmenize izin vermem! :octagonal_sign:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'merhaba') {
    const kanal = new MessageEmbed()

    .setDescription('**Size de merhaba.**  :innocent:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'afk') {
    const kanal = new MessageEmbed()

    .setDescription('**Ben çevrim içi sen çevrim içi niye yazmıyosun canımın içi?**  :wink:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'cuma') {
    const kanal = new MessageEmbed()

    .setDescription('**Haydi cemaat cuma namazına!.** :kaaba:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'prefix') {
    const kanal = new MessageEmbed()

    .setDescription('**!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'xd') {
    const kanal = new MessageEmbed()

    .setDescription('**xDe Ki Ne xD :sweat_smile:**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'adamsın') {
    const kanal = new MessageEmbed()

    .setDescription('**O sizin adamlığınız!!!** :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'yok') {
    const kanal = new MessageEmbed()

    .setDescription('**Vardır Var** :sweat_smile:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'botsun') {
    const kanal = new MessageEmbed()

    .setDescription('**O sizin botluğunuz kardeşim!** :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'tsunami ekibi') {
    const kanal = new MessageEmbed()

    .setDescription('Öncelikle merhaba sayın kullanıcımız bildiğiniz gibi şu zamanlar hiç bir kişiye güven olmuyor Discord da hesaplar çalınıyor ve sosyal medyada da çokça dolandırıcı var şimdi gelelim sadete bizim **Tsunami botunun ekibi olduğunu nasıl anlarsınız öncelik ile Destek sunucumuza bakabilirsiniz yetkililerin orada rolleri bulunur. 2. Olarak ise profil açıklamalarında Tsunami Ekibi olduklarına dair bir yazı bulunur. 3. Olarak da ekibimiz her zaman ciddi ve resmi olur 4. Olarak da ekibimiz size adını yaşını ve benzeri bilgilerini paylaşmaz sizin bilgilerinizi de paylaşmanızı da istemez. Bunları bilerek daha da güvende olabilirsiniz bir sorun yaşarsanız bizzat Kurucumuz TVT-The Poseidon#6119 ulaşabilirsiniz Yöneticilerimiz ise Mr. Kayra#6913, Mr. Ömer\19#9773, TVT-Mr. Mahmmud Esad#6141, Dizayn G#3274 eymencelik#7835, WTLNY_KURTEG#4642 ekibimizin yöneticileri de bunlardır. Umarız ki daha dikkatli olursunuz.**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'adamın dibi kim?') {
    const kanal = new MessageEmbed()

    .setDescription('**Dizayn G Adamın dibidir aynı zamanda yöneticimdir kendileri!** :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hangi yöneticin çok zeki?') {
    const kanal = new MessageEmbed()

    .setDescription('**Tabi ki de Mr. Mahmmud Esat onda bir ticari zeka var!** :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'kel tsunami') {
    const kanal = new MessageEmbed()

    .setDescription('**Sensin keltoş babana koş!**  :middle_finger:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sağlık durumların nasıl?') {
    const kanal = new MessageEmbed()

    .setDescription('**Rakiplerimden çok daha iyiyim onların hepsi corona ben ise en sağlıklı botum pingim shardım hiç bir sorunum yok ağlasın rakiplerim!**  :medal:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'nasılsın?') {
    const kanal = new MessageEmbed()

    .setDescription('**Gayet iyiyim sizler nasılsınız?**  :question:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'nasıl gidiyor hayat?') {
    const kanal = new MessageEmbed()

    .setDescription('**Bu aralar hayat bana güzel!**  :star_struck:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hangi takımı tutuyorsun?') {
    const kanal = new MessageEmbed()

    .setDescription('**Ölümüne Fener Bahçe!!!**  :yellow_heart::blue_heart: ')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hangi işte çalışıyorsun?') {
    const kanal = new MessageEmbed()

    .setDescription('**TVT Şirketinin Avukatıyım.**  :judge:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'küçükken hangi mesleği olmak isterdin?') {
    const kanal = new MessageEmbed()

    .setDescription('**Küçükken ben pilot olmak isterdim bunun sebebi gözüm her zaman yukarılardaydı hala da öyle.**  :man_pilot:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'Bekar mısın evli misin?') {
    const kanal = new MessageEmbed()

    .setDescription('**3 Ay sonra düğünüm var damat olacağım her kesi beklerim.**  :person_in_tuxedo:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin hobin hangisi?') {
    const kanal = new MessageEmbed()

    .setDescription('**Yemek yapmak en sevdiğim hobimdir.**  :man_cook:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'p') {
    const kanal = new MessageEmbed()

    .setDescription('**t!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'prefix') {
    const kanal = new MessageEmbed()

    .setDescription('**t!**')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin ders nedir?') {
    const kanal = new MessageEmbed()

    .setDescription('**Aslında iş arkadaşlarım sözelci ama ben sayısalcıyım ve matematik dersini çok seviyorum ve notumda çok yüksek.**  :man_teacher:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hangi dine inanıyorsun?') {
    const kanal = new MessageEmbed()

    .setDescription('**Bütün dinlere ve düşüncelere saygım var ama ben müslümanım ve İslam dinine inanırım.**  :man_wearing_turban:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin süper kahraman hangisi?') {
    const kanal = new MessageEmbed()

    .setDescription('**Benim en sevdiğim kahraman Superman.**  :superhero:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin kötü kahraman hangisi?') {
    const kanal = new MessageEmbed()

    .setDescription('**Benim en sevdiğim kötü kahraman tabi ki de Joker.**  :clown:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'kamu spotu yap') {
    const kanal = new MessageEmbed()

    .setDescription('**Tüm engelli kardeşlerimize yardım edelim onlar ile güzel vakit geçirelim ve toplumu da bilinçlendirelim.**  :person_in_manual_wheelchair: :person_with_probing_cane:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin hayvan hangisi?') {
    const kanal = new MessageEmbed()

    .setDescription('**Hiç bir hayvanı ayırt etmem ben hepsini çok severim onların doğa da kalması taraftarıyım.**  :feet:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin sözün nedir?') {
    const kanal = new MessageEmbed()

    .setDescription('**Karadeniz gibi boğar, Köpek balığı gibi ıstırırım benim adım TSUNAMİ!!!**  :ocean: :crown:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'corona hakkında düşüncelerin nedir?') {
    const kanal = new MessageEmbed()

    .setDescription('**Maske takın, sosyal mesafeye uyun, ellerinizi dezenfektanlayın lütfen tabi Trump taktiği ile dezenfektan da içebilirsiniz işe yarar.**  :mask:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hayırlı olsun') {
    const kanal = new MessageEmbed()

    .setDescription('**Sağ ol dostum!**  :punch:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'adam') {
    const kanal = new MessageEmbed()

    .setDescription('**O senin adamlığın dostum!**  :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'adammm') {
    const kanal = new MessageEmbed()

    .setDescription('**O senin adamlığın dostum!**  :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'adamm!') {
    const kanal = new MessageEmbed()

    .setDescription('**O senin adamlığın dostum!**  :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'ho') {
    const kanal = new MessageEmbed()

    .setDescription('**Sağ ol dostum!**  :punch:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sağ ol') {
    const kanal = new MessageEmbed()

    .setDescription('**Rica ederim görevimiz.**  :heart_eyes_cat:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'tsunami') {
    const kanal = new MessageEmbed()

    .setDescription('**Öncelikle merhaba efendim ben Tsunami Bot size nasıl yardımcı olabilirim?**  :helmet_with_cross:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en iyi bot hangisi?') {
    const kanal = new MessageEmbed()

    .setDescription('**Tabi ki de benim dostum!**  :sunglasses:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'gün aydın') {
    const kanal = new MessageEmbed()

    .setDescription('**Size de gün aydın!**  :sun_with_face:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'günaydın') {
    const kanal = new MessageEmbed()

    .setDescription('**Size de gün aydın!**  :sun_with_face:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'bb') {
    const kanal = new MessageEmbed()

    .setDescription('**Sana da bay bay yarın görüşmek üzere.**  :wave:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'by') {
    const kanal = new MessageEmbed()

    .setDescription('**Sana da bay bay yarın görüşmek üzere.**  :wave:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'bay bay') {
    const kanal = new MessageEmbed()

    .setDescription('**Sana da bay bay yarın görüşmek üzere.**  :wave:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'nasılsın') {
    const kanal = new MessageEmbed()

    .setDescription('**İyidir Siz Nasılsınız!**  :hearts:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'kolay gelsin') {
    const kanal = new MessageEmbed()

    .setDescription('**Sağ ol dostum!**  :heart_eyes:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'kg') {
    const kanal = new MessageEmbed()

    .setDescription('**Sağ ol dostum!**  :heart_eyes:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sa') {
    const kanal = new MessageEmbed()

    .setDescription('**Aleyküm Selam, Hoş Geldiniz!**  :wave:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selamün aleyküm') {
    const kanal = new MessageEmbed()

    .setDescription('**Aleyküm Selam, Hoş Geldiniz!**  :wave:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hoş geldin') {
    const kanal = new MessageEmbed()

    .setDescription('**Hoş Bulduk.**  :smiling_face_with_3_hearts:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hg') {
    const kanal = new MessageEmbed()

    .setDescription('**Hoş Bulduk.**  :smiling_face_with_3_hearts:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selam') {
    const kanal = new MessageEmbed()

    .setDescription('**Size de selam.**   :smiley_cat:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'en sevdiğin yöneticin kim?') {
    const kanal = new MessageEmbed()

    .setDescription('**Mr. Kayra tabi ki de bana en iyi o bakıyor en kötü de Mr. Mahmud Esat bakıyor.**   :disguised_face:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'iyi geceler') {
    const kanal = new MessageEmbed()

    .setDescription('**Size de iyi geceler.**   :zzz:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'görüşürüz') {
    const kanal = new MessageEmbed()

    .setDescription('**Görüşmek üzere dostum.**   :call_me:')
    .setColor('#00ffff')
    message.channel.send(kanal);
  }
});

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'espri-yap') {
    var Espri1 = [
      '**Ben Yedigün içiyorum sen Onbeşgün iç.**',
      '**Almanya da Almanlar yaşıyorsa, Sakarya da sakarlar mı yaşar?**',
      '**Fransız ihtilali neye karşı yapılmıştır bilir misin? - Sabaha karşı yapılmıştır.**',
      '**Küçük su birikintisine ne denir bilir misin? - Bilirim sucuk denir.**',
      '**Erkek ata ne denir bilir misin? - Bilirim bayat denir.**',
      '**Dün senin için ölenler bugün neredeler? - Dün öldüler ya aptal!**',
      '**Aile kabristanıdır. Damsız girilmez...**',
      '**İlahi Azrail... Sen adamı öldürürsün!**',
      '**Geçenlerde izdivaç programında adam evim, arabam, param var dedi üç hatun aynı anda elektrik aldı. Adam bildiğin üçlü priz çıktı.**',
      '**Türkiye’nin en yeni şehri neresi bilir misin? – Tabi bilirim Nevşehir.**',
      '**Acıkan var mı ya? - Yok bizde tatlı kan var.**',
      '**Masada hangi örtü kullanılmaz? - Tabi ki de Bitki Örtüsü.**',
      '**Elektriği Edison buldu ama parasını niye biz ödüyoruz?**',
      '**İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...**',
      '**Tsunami mi Elektrik mi? - Tsunami tabi ki de Elektrik de çok ping var!**',
      '**Burası dc çöplüğü!**',
      '**En çok eşek yavrusu nerde bulunur? - Tabi ki SPA merkezinde.**',
      '**Mafya babası olmak için oğlumun adını “Mafya” koydum.**',
      '**Zenginler et, fakirler hayalet yer.**',
      '**Canın sıkıldıysa gevşet.**',
      '**Abi sen tüp bebek misin? - Gaz kaçırıyorsun da.**',
      '**Yıkanan ton balığına ne denir? -- Washington.**',
      '**Geçen gün taksi çevirdim hala dönüyor.**',
      '**Ay baktım seni gördüm. Sana baktım ayı gördüm.**',
      '**Kavun deyip geçme çünkü parola kavun değil!**',
      '**Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.**',
      '**Elimde iphone yedi var şarjda ve yanık kokusu alıyorum inşallah elim yanıyordur.**',
      '**Gizlice taksimetreye bakmaya çalışırken sol gözüm taksicinin kucağına düştü.**',
      '**İki diş şarjım kaldı ne demek lan batarya yerine sarımsak mı takıyon telefona.**',
      '**Abi duydun mu, 50 kişiyi taramışlar. Yapma ye, nerde? Marketin karşısındaki berberde…**',
      '**Kenan İmirzalıoğlunu ne zamandır tanıyorsun? - Ezelden belli.**',
      '**Abi urfayla adana arasında ne fark var? - 400 Km var abicim.**',
      '**Sana bağlanmak kolaydı ayrılmak ise fanta.**',
      '**Geçen gün ödeme noktasına gittim ö dedim geri geldim.**',
      '**Dün bir Amerikalı gördüm. Abi nasıl İngilizce konuşuyor görecen.**',
      '**İdrar tahlili yapılır. Ama lütfen buraya işemeyin.**',
      '**Aile kabristanıdır. Damsız girilmez...**',
      '**Rock yapmayan kişiye ne denir? - Yaprock.**',
      '**Sinemada on dakika ara dedi, aradım aradım açmadı.**',
      '**Röntgen Filmi çektirdik, yakında sinemalarda.**',
      '**Yeni yapılmış resimlere ne denir? - Nevresim.**',
      '**Gitarı getirde biraz şarkı söyleyelim. - Abi arı sokmasın!**',
      '**Ben hikâye yazarım Ebru Destan.**',
      '**Bir sinek ilacı alabilir miyim? - Sineğinizin nesi var acaba?..**',
      '**Problem yoksa neyi çözeceksin? Önce problem çıkar.**',
      '**Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.**',
      '**Şeytan kapıyı nasıl çalar? - Din den dön!**',
      '**Bir bardak su, Sezen Aksu**',
      '**Stres atıyorum! Tut!**',
      '**Adamın biri fakirmiş karısı braun.**',
      '**Adamın saçı kırmış sakalı çayır.**',
      '**Adamın canı çıkmış yerine takamamışlar.**',
      '**Çalmak fiilinin gelecek zamanı nedir? - Hapse girmek.**',
      '**Geçen gün taksi çevirdim hala dönüyor.**',
      '**Uzun lafın kısası : U.L.**',
      '**Sinüs 60, kosinüs tutmuş.**',
      '**Damın biri yatmış, karısı da vapur.**',
      '**Bir adamın burnu akmış, öbürünün karaymış:)**',
      '**Bir adamın metresi varmış arkadaşının da santimetresi.**',
      '**Adam yüz bulmuş, yüzsüzler bizim değil demişler.**'
    ];
    var espri1galip = Math.floor(Math.random()*Espri1.length);


    var Şampiyon = [
      `${Espri1[espri1galip]}`,
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setColor('#00ffff')
    .addField('🤪', `${Espri1[espri1galip]}`)
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'joke-make') {
    var Espri1 = [
      '**I’d like to start dieting but I’ve got too much on my plate.**',
      '**I can’t have kids because I have white couches.**',
      '**Q: What did the 0 say to the 8?**',
      '**Q: What do you call a train carrying bubblegum?**',
      '**My wife is so negative. I remembered the car seat, the stroller, and the diaper bag. Yet all she can talk about is how I forgot the baby.**',
      '**Q: What breed of dog can jump higher than buildings?**',
      '**Q: Why did the Oreo go to the dentist?**',
      '**Q: Can February March?**',
      '**My boss came to my work area and told me that I was fired.**',
      '**I have a long history of bad luck, and it all started when I born.**'
    ];
    var espri1galip = Math.floor(Math.random()*Espri1.length);


    var Şampiyon = [
      `${Espri1[espri1galip]}`,
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setColor('#00ffff')
    .addField('🤪', `${Espri1[espri1galip]}`)
    .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
    [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
    [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'kapak-yap') {
    var Kapak1 = [
      '**Sokak lambası gibi olma ey yar kime yandığın belli olsun.**',
      '**İyileştirir diye medet umduklarımız tekrar tekrar yaralıyor bizi.**',
      '**En güzel ironisidir dünyanın, seni üzmek istemiyorum diyen herkesin hayatımızı yıması.**',
      '**Kıyamam dediklerimiz bizi ince ince kıyıp pembeleşinceye kadar kısık ateşte kavurdular.**',
      '**Yüz kere yere düşmüş olayım; başkalarına çelme takan biri olmayacağım. Ben kazanan değil, insan olmak istiyorum.**',
      '**Bir kadının gözyaşının akmasına sadece soğan değil, bir ‘hıyar’ da neden olabilir.**',
      '**Sen hayata at gözlükleriyle bakmaya devam edersen, birilerinin çüşşş demesi zoruna gitmesin.**',
      '**Bilirsin ben belâ okuyamam, Allah salânı versin.**',
      '**Bir zamanlar toz konduramadıklarım, şimdi kirden görünmez olmuş.**',
      '**Her şeyi bilmene gerek yok haddini bil yeter.**',
      '**Kime kıymet versem hayatımı ‘kıyamete’ çevirmesini iyi biliyor.**',
      '**Gidişine illa bir isim konulacaksa MAL KAYBI diyelim.**',
      '**‎50 Kuruşluk çikolatanın verdiği mutluluğu veremeyen insanlar var.**',
      '**Bazı insanları hayata baktığı pencereden, atmalı.**',
      '**Bazı insanlar ayakkabı mağazası gibi, her numara var Allah için.**',
      '**Kendime yakışanı severim. Herkese yapışanı değil.**',
      '**Seni adam ederdim ama çoktan köpeğim olmuşsun, ne luzmu var.**',
      '**Elektrik sevmem çok pingi var asıl iş bende!**',
      '**Efendiler yok efendi var o da benim!**',
      '**Çorumlunun yaptığını her kes yapamaz!**',
      '**Gerçek sistem Tsunami de ki sistem yani bende ki sistem!**',
      '**Şimdi söyle; hayatını düzene mi sokayım, seni üzene mi?**',
      '**Varlığım parmağına ‘yüzük’ olmadı ya. Yokluğum kulağına ‘küpe’ olsun.**',
      '**İki dakika insan ol desem zaman tutacak insanlar tanıyorum.**',
      '**Biraz insan ol diyeceğim ama seni de zor durumda bırakmak istemiyorum.**',
      '**Bir zam” da şu insanlara gelse kendilerini bu kadar ucuza” satmasalar…**',
      '**Yanımda olması gerekenler zaten yanımda def olup gidenler kimin umurunda.**',
      '**Ey sevgili nedir yüzündeki acı yoksa kırılan hayallerim mi battı eline?**',
      '**Çok fazla konuşmaya gerek yok aslında. Sen, benden daha kötülerine layıksın.**',
      '**Bana kalbimdesin deme sevgili, kalabalık yerlerde sıkıntı basıyor beni.**',
      '**Akıllı telefonmuş. Karşı taraf aptal olunca, telefon akıllı olsa bile işe yaramıyor.**',
      '**Erkek arkadaşının parası yok diye tokum” diyen de vardır, yokum” diyen de.**',
      '**Benim bütünlemem yok sevgilim. Bir kere kaldın mı benden bir daha geçemezsin.**',
      '**Sana değer verip aşkı bulacağıma x’e değer veririm y’yi bulurum daha iyi.**',
      '**Oralarda benden yok bir düşünsen anlarsın. Buralarda senden çok var görsen şaşarsın.**'
    ];
    var kapak1galip = Math.floor(Math.random()*Kapak1.length);


    var Şampiyon = [
      `${Kapak1[kapak1galip]}`,
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setColor('#00ffff')
    .addField('🖕', `${ Kapak1[kapak1galip]}`)
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'özlü-söz') {
    var Kapak1 = [
      '**Ömür bir masal gibidir, ne kadar uzun olduğu değil, ne kadar güzel yaşandığı önemlidir.**',
      '**Anlamlı, etkileyici ve güzel özlü sözler.. Uçmayı seviyorsan, düşmeyi de bileceksin. Korkarak yaşıyorsan, yalnızca hayatı seyredersin..**',
      '**Yüzümüzün ve gözlerimizin rengi ne olursa olsun, gözyaşlarımızın rengi aynıdır.**',
      '**Kar taneleri ne güzel anlatıyor, birbirlerine zarar vermeden de yol almanın mümkün olduğunu.**',
      '**Mükеmmеl kişiyi aramaktan vazgеç. Tеk ihtiyacın olan sana sahip olduğu için şanslı olduğunu düşünеn biridir.**',
      '**Doğuştan sahip olduklarınızla yaşamayı öğrenmek bir süreç, bir katılım, yani yaşamınızın yoğrulmasıdır.**',
      '**Aşktan korkmak, yaşamdan korkmak demektir ve yaşamdan korkanlar şimdiden üç kez ölmüşlerdir.**',
      '**Bazı insanlar yağmuru hissеdеr, bazıları isе sadеcе ıslanır.**',
      '**Hayattaki en büyük zafer hiçbir zaman düşmemekte değil, her düştüğünde ayağa kalkmakta yatar.**',
      '**Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin, o nehir asla durmaz.**',
      '**İnsanların, senin hakkında ne düşündüklerini önemsemeyerek, ömrünü uzatabilirsin mesela.**',
      '**Unutma; Hеr gеlеn sеvmеz.. Vе hiçbir sеvеn gitmеz.**',
      '**Hiç bir canın acısı, sеnin acından az dеğildir.**',
      '**Üstada sorarlar sеvgi mi nеfrеt mi diyе, “nеfrеt” diyе cеvap vеrir vе еklеr; çünkü onun sahtеsi olmaz.**',
      '**Yanlış bildiğin yolda; hеrkеslе yürüyеcеğinе, doğru bildiğin yolda; tеk başına yürü…**',
      '**Büyük sıçrayışı gerçekleştirmek isteyen, birkaç adım geriye gitmek zorundadır. Bugün yarına dünle beslenerek yol alır.**',
      '**Herşeyi denerim; ama yapabildiklerimi yaparım.**',
      '**Aşk bir kadının yaşamının tüm öyküsü, erkeğin ise yalnızca bir serüvenidir.**',
      '**Niçin hep birlikte barış ve uyum içinde yaşamayalım? Hepimiz aynı yıldızlara bakıyoruz, aynı gezegenin üzerindeki yol arkadaşlarıyız ve aynı gökyüzünün altında yaşıyoruz.**',
      '**Küçük işlere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.**',
      '**Mutluluk elin erişebileceği çiçeklerden bir demet yapma sanatıdır**',
      '**Mutluluk her şeyden önce vücut sağlığındadır.**',
      '**Ne kadar hazin bir çağda yaşıyoruz, bir önyargıyı ortadan kaldırmak atomu parçalamaktan daha güç.**',
      '**Ne kadar yaşadığımız değil, nasıl yaşadığımız önemlidir.**',
      '**Ne kadar yükselirsen, uçmayı bilmeyenlere o kadar küçük görünürsün.**',
      '**O da gazi olmak istedi, fakat ona anlatmak gerekti ki, şehid olmayı göze alamayan gazi olamazdı.**',
      '**Ya başlamamalı, ya da bitirmeli..**',
      '**Ey sevgili nedir yüzündeki acı yoksa kırılan hayallerim mi battı eline?**'
    ];
    var kapak1galip = Math.floor(Math.random()*Kapak1.length);


    var Şampiyon = [
      `${Kapak1[kapak1galip]}`,
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setColor('#00ffff')
    .addField('🚬', `${Kapak1[kapak1galip]}`)
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
    }
    })

    client.on('message',message => {
      if (message.content.toLowerCase() === prefix + 'şanslı-sayım') {
        var Kapak1 = [
          '**Şanslı sayınız 1, Yaratıcı ve Ahenkli birisiniz yaratıcı ve ahnekli fikirlerinizi !öner yazıp bizimle paylaşsanız mutlu oluruz!**',
          '**Şanslı sayınız 2, Duyarlı bir insansınız ne güzel!**',
          '**Şanslı sayınız 3, Siz Sabırsız ve aynı zamanda çok Başarılı birisiniz sizi destek sunucumuzda yetkili olarak görmek isteriz!**',
          '**Şanslı sayınız 4, Siz çok Tedirginsiniz hadi ama bitsin şu tedirgen olma durumu coşun biraz maceralara girişin!**',
          '**Şanslı sayınız 5, Siz çok Beceriklisiniz ne güzel bir şey bu!**',
          '**Şanslı sayınız 6, Siz çok Karizmatiksiniz oyunculuk düşündünüz mü hiç?**',
          '**Şanslı sayınız 7, Ronaldo sizin idolünüz!**',
          '**Şanslı sayınız 8, Kararsız birisiniz hadi ama kararsız olmayın!**',
          '**Şanslı sayınız 9, Açık sözlü birisiniz ne güzel bir şey!**',
          '**Şanslı sayınız 10, Siz çok Bonkörsünüz söz yok!**',

        ];
        var kapak1galip = Math.floor(Math.random()*Kapak1.length);


        var Şampiyon = [
          `${Kapak1[kapak1galip]}`,
        ];

        var şampiyon = Math.floor(Math.random()*Şampiyon.length);

        const embed = new MessageEmbed()
        .setColor('#00ffff')
        .addField('  👉', `${Kapak1[kapak1galip]}`)
        .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
        message.channel.send(embed);
        }
        })

            client.on('message',message => {
              if (message.content.toLowerCase() === prefix + 'aşk-ölçer') {
                var Kapak1 = [
                '**❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ Sana sırıl sıklam aşık!**',
                '**❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤 Seni çok seviyor hemde çok!**',
                '**❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 Naz yapıyor Yemezler seni seviyor!**',
                '**❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤 Çaktırmamaya çalışıyor ama seviyor!**',
                '**❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 Yani o bile tam emin değil.**',
                '**❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤 Sevmiyor gibi ama belli olmaz.**',
                '**❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤 7 Milyar insan var üzülme.**',
                '**❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤 Unut sen bu işi sevmiyor seni. :(**',
                '**🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 Senden önemli mi boş ver.**'
                ];
                var kapak1galip = Math.floor(Math.random()*Kapak1.length);


                var Şampiyon = [
                  `${Kapak1[kapak1galip]}`,
                ];

                var şampiyon = Math.floor(Math.random()*Şampiyon.length);

                const embed = new MessageEmbed()
                .setColor('#00ffff')
                .addField('**🌡️ Aşk Ölçer**', `${Kapak1[kapak1galip]}`)
                .addField(`➽ **🔗 Linkler**`, `[💌 Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
                [🗳 Bota Oy Ver](https://top.gg/bot/779230692960632832)
                [☎️ Botun Destek Sunucusu](https://discord.gg/S4YtFAjRk8)`)
                message.channel.send(embed);
                }
                })

                client.on('message',message => {
                  if (message.content.toLowerCase() === prefix + 'love-meter') {
                    var Kapak1 = [
                      '** ❤️❤️❤️❤️❤️❤️❤️❤️❤️ Im so in love with you! **',
                      '** ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 She loves you very much! **',
                      '** ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 Naz is doing They dont eat they love you! **',
                      '** ❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤 Trying not to get screwed but she loves it! **',
                      '** ❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 So even hes not quite sure. **',
                      '** ❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤 Like he doesnt like it, but its not obvious. **',
                      '** ❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤 There are 7 billion people, dont be sad. **',
                      '** ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Forget you not like this. : (** ',
                      '** 🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 enough for you, never mind. **'
                    ];
                    var kapak1galip = Math.floor(Math.random()*Kapak1.length);


                    var Şampiyon = [
                      `${Kapak1[kapak1galip]}`,
                    ];

                    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

                    const embed = new MessageEmbed()
                    .setColor('#00ffff')
                    .addField('**🌡️ Love Meter**', `${Kapak1[kapak1galip]}`)
                    .addField (`➽ ** 🔗 Links **`, `(💌 Add Bot to Server) (https://discord.com/oauth2/authorize?client_id=779230692960632832&scope=bot&permissions=8)
                    [🗳 Bota Vote] (https://top.gg/bot/779230692960632832)
                    (☎️ Bot's Support Server) (https://discord.gg/S4YtFAjRk8) `)
                    message.channel.send(embed);
                    }
                    })


                client.on('message',message => {
          if (message.content.toLowerCase() === prefix + 'fal-bak') {
            var Kapak1 = [
              '**Ne sevdiğin belli, ne sevmediğin papatya falı gibi.**',
              '**Fala inanma falsız da kalma.**',
              '**Kendine dikkat et bak sende göz var, dur dur hem de iki tane.**',
              '**Balık çıktı kısmetinde canlı canlı vereyim mi bir kilo?**',
              '**Çok yakın zamanda havalar ısınacak, sende yavaş yavaş terleyeceksin.**',
              '**Kısa bir süre içinde beklediğin bir yerden iyi bir haber alacaksın.**',
              '**Kahve falında balık para demekse; en büyük hazinemdir gözlerindeki okyanus.**',
              '**Karanlık bir gece geçireceksin ve ondan sonra güzel bir haber alacaksın.**',
              '**Kahve içtikten sonra fal bakma için çevrilen fincanın içinde tek şey vardır. O da kahvenin telvesi.**',
              '**Eşek gitmez yolların var, yap yap bitmez işlerin var, uçan kuşta gelecek haberin var.**',
              '**Tsunami Destek Sunucusunun yetkilisi olacaksın.**',
              '**Bak bak bak görüyor musun? Kaplumbağa var. Ay kızım sen ilerde çok mutlu bir yuva kuracaksın.**',
              '**Arkadaşlar gelince köpüklü kahveler içilir, fincanlar ter çevrilir fala bakmak için açılır.**',
              '**Sarışın mı desem, esmer mi desem, kumrala da benziyor, yok yok demeyim en iyisi.**',
              '**Gel senin falına bakayım, çıkmayanı çıkarayım, görmediklerini göstereyim, cebindeki son kuruşunu da alayım.**',
              '**Kahve muhabbetiyle her zaman güzel olur. Hele bir de üstüne fal muhabbeti olursa daha da iyi gelir.**',
              '**İki tane yolun var ikisi de aynı yere çıkıyor ama dikkat et birisi engellerle dolu, diğeri aydınlık. Seçim senin elinde olacak.**',
              '**Sana gece şişip sabah sönen bir şey görüyorum, balon gibi ama balona benzemiyor, salam gibi ama salama da benzemiyor.**',
              '**Seni çok seven birisi var, senin için yanıyor, ölüp kavruluyor. İsminin de baş harfi a ile z arasında bir harf.**',
              '**Çevrende birisi var, sana dolanıp durur, üç vakte kadar gelip seni babandan isteyecek, çok mutlu olacaksınız, üç çocuğunuz olacak.**',
              '**Falcıya, büyücüye, kahine giderek, onların söylediklerine inanan, Kur’an-ı kerime inanmamış olur. -- İNANMAYIN BANA --**',
              '**Çok üzülmüşsün sen çok gözyaşı dökmüşsün ama şimdi iyisin. Hatta sen üzüldüğün zaman gözlerinden yaş gelmiş.**',
              '**Bak görüyorum, hem de çok iyi görüyorum şükürler olsun Allah’ım bana bunları gösterdiğin için. Havuç ye göze çok iyi geliyor.**',
              '**Bir uzak bir kısa yolun var. Kısa yoldan gidersen ite dalanırsın, uzak yoldan gidersen çalıya dolanırsın en güzeli sen evde otur.**',
              '**Boş yere papatya fallarında sen aramışım, boş yere papatyanın çiçeklerini koparmışım, kahve fincanlarında hep sana giden yollar aramışım.**',
              '**Sana bir haber gelecek ama sen kapıda, bacada pencere de bekleme, haber olmadık anda, olmadık yerde gelebilir, olmadı gelmeyebilir de.**',
              '**Bak burada bir yol var hem de hem gidiş hem geliş, hız sınırı 110 km, bak bak az ilerde radar var, hah işte o radar arabasının içindeki polis sana aşık olacak.**',
              '**Kafanın içinde düşündüğün bir şeyler var. Uzaklara bakarken gözlerinle bakıyorsun, konuşurken ağzını açıyorsun, bak bak ayaklarınla yürüyorsun.**',
              '**Böyle melek gibi kanatları olup şeytan pekguzelsozler.com yüzlü biri var burada. Bak bak burada ama yüzünü göstermiyor. Of of bu çok tehlikeli senin yüzüne gülüyor da arkandan neler çeviriyor.**',
              '**Kalbin güm güm atıyor, ciğerlerine oksijen dolup karbondioksit çıkıyor, kulakların duymadığın sesleri duyuyor, gözlerinde çok iyi görüyor. Sağlıklısın maşallah.**',
              '**Bak güzel kızım senin bir sevdiğin var o da seni seviyor ama oralarda bir de bak bak kuyruğu görünüyor bir kara kedi dolaşıyor aranıza girmeye çalışıyor.**'
            ];
            var kapak1galip = Math.floor(Math.random()*Kapak1.length);


            var Şampiyon = [
              `${Kapak1[kapak1galip]}`,
            ];

            var şampiyon = Math.floor(Math.random()*Şampiyon.length);

            const embed = new MessageEmbed()
            .setColor('#00ffff')
            .addField('🔮', `${Kapak1[kapak1galip]}`)
            .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
            message.channel.send(embed);
            }
            })

            client.on('message',message => {
      if (message.content.toLowerCase() === prefix + 'kaçcm') {
        var Kapak1 = [
          '**Nerede bu arkadaş? 0cm**',
          '**Nerede bunun ucu? Ɛ=> 1cm**',
          '**Biz buna mazbatacık diyelim en iyisi. Ɛ===> 3cm**',
          '**Ne yedin ne içtin sen? Ɛ=====> 5cm**',
          '**Çıkarda karadeniz de balık tutak! Ɛ========> 10cm **',
          '**Maşallah dağa tepeye sığmaz! Ɛ==============> 1m**',
          '**Osmanlının 3 kıta 7 denizine sığmaz mübarek! Ɛ==================================> 10m**',
          '**Beton yetmez! Ɛ=================================================================> 100km**',
          '**Terminatör! Ɛ====================================================================> 10000000km**'
        ];
        var kapak1galip = Math.floor(Math.random()*Kapak1.length);


        var Şampiyon = [
          `${Kapak1[kapak1galip]}`,
        ];

        var şampiyon = Math.floor(Math.random()*Şampiyon.length);

        const embed = new MessageEmbed()
        .setColor('#00ffff')
        .addField('📍 Mazbata Ölçer 📍', `${Kapak1[kapak1galip]}`)
        .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
        message.channel.send(embed);
        }
        })

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-ucl') {
    var Maç1 = [
      'Bayern Münich',
      'Lyon',
    ];
    var Maç2 = [
      'Paris Saint-Germain',
      'RB Leipzing'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **UEFA Şampiyonlar Ligi**')
    .setDescription('Evet sayın seyirciler **Şampiyonlar Ligi** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('2. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-tr') {
    var Maç1 = [
      'Fenerbahçe',
      'Galatasaray',
    ];
    var Maç2 = [
      'İstanbul Başakşehir FK',
      'Beşiktaş'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **Süper Lig**')
    .setDescription('Evet sayın seyirciler **Süper Lig** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-gb') {
    var Maç1 = [
      'Manchester United FC',
      'Liverpool FC',
    ];
    var Maç2 = [
      'Manchester City FC',
      'Chelsea FC'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **Süper Lig**')
    .setDescription('Evet sayın seyirciler **Premier Lig** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-es') {
    var Maç1 = [
      'Real Madrid CF',
      'FC Barcelona',
    ];
    var Maç2 = [
      'Atlético Madrid',
      'Valencia CF'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **La Liga Santander**')
    .setDescription('Evet sayın seyirciler **La Liga Santander** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-ıt') {
    var Maç1 = [
      'Juventus FC',
      'AC Milan',
    ];
    var Maç2 = [
      'SSC Napoli',
      'AS Roma'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **Serie A**')
    .setDescription('Evet sayın seyirciler **Serie A** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-de') {
    var Maç1 = [
      'FC Bayern München',
      'Borussia Dortmund',
    ];
    var Maç2 = [
      'FC Schalke 04',
      'SV Werder Bremen'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **Bundesliga**')
    .setDescription('Evet sayın seyirciler **Bundesliga** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message',message => {
  if (message.content.toLowerCase() === prefix + 'futbol-fr') {
    var Maç1 = [
      'Paris Saint-Germain FC',
      'Olympique Lyonnais',
    ];
    var Maç2 = [
      'AS Monaco FC',
      'Olympique Marsilya'
    ];
    var maç1galip = Math.floor(Math.random()*Maç1.length);
    var maç2galip = Math.floor(Math.random()*Maç2.length);


    var Şampiyon = [
      `${Maç1[maç1galip]}`,
      `${Maç2[maç2galip]}`
    ];

    var şampiyon = Math.floor(Math.random()*Şampiyon.length);

    const embed = new MessageEmbed()
    .setTitle(':trophy:  **Ligue 1**')
    .setDescription('Evet sayın seyirciler **Ligue 1** maç sonucu tablosunu görüyoruz!  :trophy:')
    .setColor('#00ffff')
    .addField('1. Maç Sonucu ', `${Maç1[maç1galip]}`)
    .addField('2. Maç Sonucu ', `${Maç2[maç2galip]}`);
    message.channel.send(embed);
  }
})

client.on('message', async message => {
	if (message.content.toLowerCase() === 'en sevdiğin 3 meyve') {
		try {
			await message.react('🍎');
			await message.react('🍊');
			await message.react('🍇');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'gül') {
		try {
			await message.react('🙂');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'haykır') {
		try {
			await message.react('🤣');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'yalandan gül') {
		try {
			await message.react('😏');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'ağla') {
		try {
			await message.react('😭');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'üzül') {
		try {
			await message.react('😥');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'mutlu ol') {
		try {
			await message.react('😇');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'uyu') {
		try {
			await message.react('😴');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'paragöz ol') {
		try {
			await message.react('🤑');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'hasta ol') {
		try {
			await message.react('🤒');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'korona ol') {
		try {
			await message.react('😷');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'şaşır') {
		try {
			await message.react('😲');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'uykulu ol') {
		try {
			await message.react('🥱');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'sarhoş ol') {
		try {
			await message.react('🥴');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'havalı ol') {
		try {
			await message.react('😎');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'sinirlen') {
		try {
			await message.react('🤬');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'dalga geç') {
		try {
			await message.react('🤭');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'filozof ol') {
		try {
			await message.react('🤓');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'yalan söyle') {
		try {
			await message.react('🤥');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on('message', async message => {
	if (message.content.toLowerCase() === 'kudur') {
		try {
			await message.react('👹');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

client.on("message", m => {
  if (m.channel.id !== "785051069696573462") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("messageUpdate", (old, nev) => {
  if (old.content != nev.content) {
    const yasak = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      "sg",
      "oç",
      "oçe",
      "anan",
      "ananı",
      "ananı sikim",
      "anneni sikim",
      "anneni sikeyim",
      "ananı sikeyim",
      "annen",
      "ağzına",
      "ağzına sıçim",
      "ağzına sıçayım",
      "ağzına s",
      "am",
      "ambiti",
      "amını",
      "amını s",
      "amcık",
      "amcik",
      "amcığını",
      "amciğini",
      "amcığını",
      "amcığını s",
      "amck",
      "amckskm",
      "amcuk",
      "amına",
      "amına k",
      "amınakoyim",
      "amına s",
      "amunu",
      "amını",
      "amın oğlu",
      "amın o",
      "amınoğlu",
      "amk",
      "aq",
      "amnskm",
      "anaskm",
      "ananskm",
      "amkafa",
      "amk çocuğu",
      "amk oç",
      "piç",
      "amk ç",
      "amlar",
      "amcıklar",
      "amq",
      "amındaki",
      "amnskm",
      "ananı",
      "anan",
      "ananın am",
      "ananızın",
      "aneni",
      "aneni s",
      "annen",
      "anen",
      "ananın dölü",
      "sperm",
      "döl",
      "anasının am",
      "anası orospu",
      "orospu",
      "orosp,",
      "kahpe",
      "kahbe",
      "kahße",
      "ayklarmalrmsikerim",
      "ananı avradını",
      "avrat",
      "avradını",
      "avradını s",
      "babanı",
      "babanı s",
      "babanın amk",
      "annenin amk",
      "ananın amk",
      "bacı",
      "bacını s",
      "babası pezevenk",
      "pezevenk",
      "pezeveng",
      "kaşar",
      "a.q",
      "a.q.",
      "bitch",
      "çük",
      "yarrak",
      "am",
      "cibiliyetini",
      "bokbok",
      "bombok",
      "dallama",
      "göt",
      "götünü s",
      "ebenin",
      "ebeni",
      "ecdadını",
      "gavat",
      "gavad",
      "ebeni",
      "ebe",
      "fahişe",
      "sürtük",
      "fuck",
      "gotten",
      "götten",
      "göt",
      "gtveren",
      "gttn",
      "gtnde",
      "gtn",
      "hassiktir",
      "hasiktir",
      "hsktr",
      "haysiyetsiz",
      "ibne",
      "ibine",
      "ipne",
      "kaltık",
      "kancık",
      "kevaşe",
      "kevase",
      "kodumun",
      "orosbu",
      "fucker",
      "penis",
      "pic",
      "porno",
      "sex",
      "sikiş",
      "s1kerim",
      "s1k",
      "puşt",
      "sakso",
      "sik",
      "skcm",
      "siktir",
      "sktr",
      "skecem",
      "skeym",
      "slaleni",
      "sokam",
      "sokuş",
      "sokarım",
      "sokarm",
      "sokaym",
      "şerefsiz",
      "şrfsz",
      "sürtük",
      "taşak",
      "taşşak",
      "tasak",
      "tipini s",
      "yarram",
      "yararmorospunun",
      "yarramın başı",
      "yarramınbaşı",
      "yarraminbasi",
      "yrrk",
      "zikeyim",
      "zikik",
      "zkym"
    ];
    if (yasak.some(banned => nev.content.includes(banned))) {
      if (!nev.member.hasPermission("MANAGE_MESSAGES")) {
        try {
          nev.delete();
          nev.channel.send(
            `<@${nev.author.id}>, bu sunucuda mesajını düzenleyerek küfür edemez veya reklam yapamazsın!`
          );
          nev.author.send(
            `<@${nev.author.id}>, **${nev.guild.name}** adlı sunucuda mesajını düzenleyerek küfür edemez veya reklam yapamazsın!`
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});

client.on('message', message => {
  if (message.content.startsWith('oylama')) {
const args = message.content.split(' ').slice(1)
const botmesajı = args.join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry:  Oylama komutunu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısınız!');
if (!botmesajı) return message.reply(':pencil:  Ne oylaması yapacağımı yazmalısınız!');
message.delete(message.author)
const embed = new MessageEmbed()
.setTitle(':ballot_box:  **OYLAMA**')
.setDescription(botmesajı)
.setColor('#00ffff');
message.channel.send({ embed: embed }).then( embedMessage => {
  embedMessage.react("✔️")
  embedMessage.react("❌");
})
}
})

client.on('message', message => {
if (message.content.startsWith('duyur')) {
const kanal = message.mentions.channels.first();
const args = message.content.split(' ').slice(2)
const botmesajı = args.join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry:  Duyuru komutunu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısınız!');
if (!botmesajı) return message.reply(':pencil: Duyuru metnini yazmalısınız!');
if (!kanal) return message.reply(':no_entry:  Hangi kanalda duyuru yapacağımı belirtmelisiniz!');
message.delete(message.author)
kanal.send(botmesajı);
}
})

client.login('Nzc5MjMwNjkyOTYwNjMyODMy.X7dhIg.CAhP4uF54MyJDAh0Gxf4OWbFCjg')
