module.exports = {
    kod: "test",
    aliases: ["test","test1"],
    description: "sdsdsdsdsdsd",
    usage: "test",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    async run (client, message) {

   message.channel.send("Bu bir test mesajıdır.")
    }
}
