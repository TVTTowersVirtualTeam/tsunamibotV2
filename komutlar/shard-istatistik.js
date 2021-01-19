const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let sh = await client.shard.broadcastEval(`[this.guilds.cache.size,this.shard.id,this.ws.ping]`);
const embed = new Discord.MessageEmbed().setColor("RANDOM")
sh.forEach((shard) => {
	embed.addField("Shard ID:",shard[0],true).addField("Shard Sunucu Sayısı:",shard[1],true).addField("Shard Ping:",shard[2],true)
});
message.channel.send(embed);
};
