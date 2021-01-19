const { MessageEmbed } = require("discord.js");
module.exports = {
kod: "sorum",
description: "Soru sorarsınız!",
category: "eğlence",
run: async (bot, message, args) => {
  let question = message.content.slice(bot.prefix.length + 6);
  if (!question)
    return message.channel.send(`Dostum çekinme istediğin soruyu sor bana!`);
  else {
    let responses = [
      "Evet.",
      "Hayır.",
      "Kesinlikle.",
      "Neden olmasın?",
      "Bir milyon yılda bile değil",
      "Sence?",
      "Kesinlikle evet!",
      "Ben Anlama Zorluğu Çektim!!!",
      "Üzdün beni bak ama şimdi :(",
      "En iyisiyim.",
      "Günlük Aktivitemdir.",
      "Hiç yapmam.",
      "Hayır çok sıkıcı!"
    ];
    let response =
      responses[Math.floor(Math.random() * responses.length - 1)];
    let Embed = new MessageEmbed()
      .setTitle(`❓ Yeni Bir Soru!`)
      .setDescription(`❓ Sorunuz: ${question}\n✳️ Benim Yanıtım: ${response}`)
      .setColor(`#00ffff`);
    message.channel.send(Embed);
  }
},
};
