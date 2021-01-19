module.exports = {
  kod: "nesne",
  async run (client, message) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '785060282686373938')
    kanal.send(öneri + ' **💾 Nesneler Komutu kullanıldı.** ' + message.author.tag + ' - ' + message.channel.name)
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle('**🧱 Nesne Emoji Kategorisi**')
    .setColor('#00ffff')
    .addField('**Cihazlar =** ⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️')
    .addField('**İşe Yarar Cisimler =** 🔧 🔨 🔩 ⚙️ 🧲 🔫 💣 🧨 🪓 🔪 🗡 ⚔️ ⚱️ 🏺 🔮 📿 🧿 💈 ⚗️ 🔭 🔬 📯')
    .addField('**Ağaçtan Cisimler =** 📜 📃 📄 📑 🧾 📊 📈 📉 📆 📅 📇 📋 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 📝')
    .addField('**Cisimler ve Semboller =** 📐 📏 🧮 📌 📍 ✂️ ✒️ ✏️ 🔍 🔎 🔏 🔐 🔒 🔓')
    .setFooter('🗳️ Botumuzu oylayarak bizi destekleyebilirsiniz.');
    message.channel.send(embed);
  }
}
