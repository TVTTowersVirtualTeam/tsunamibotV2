const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    kod: "panda-ol",
    category: "animals",
    run: async (client, message, args) => {

        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

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
            .setTitle(`🐼 Artık çok tombik bir pandayım!`)
            .setColor(`#00ffff`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}
