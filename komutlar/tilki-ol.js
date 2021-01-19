const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    kod: "tilki-ol",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/fox";
        const facts = "https://some-random-api.ml/facts/fox"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send('⛔️ Lütfen komutu doğru yazdığınızdan emin olun!')
        }

        const embed = new MessageEmbed()
            .setTitle(`🦊 Artık çok sinsi bir tilkiyim!`)
            .setColor(`#00ffff`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}
