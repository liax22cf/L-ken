module.exports = {
    name: "say",
    cooldown: 5,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "Says something in specified channel",
    async execute (message, args, cmd, client, Discord){
        if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`ADMINISTRATOR\``);
        else{
        if (message.content.includes("@everyone") || (message.content.includes("@here")))  return; // if the message content includes @everyone OR ( || means or in js) @here, stop running the code. 

        let textChannel = message.mentions.channels.first() // the first channel that you tag
        if(!args[0]) return message.channel.send('Provide a channel for me to send the message in!'); // args are words or numbers after the command. The first word is args[0], and then args[1], and so on and so on.
        if(!args[1]) return message.channel.send('Provide a message to say!');
        if (!message.guild.channels.cache.has(textChannel.id)) return; // here we're checking if the textChannel id provided is in the server where the message is being sent.
        message.delete() // deleting the command message

            msg = args.slice(1).join(" "); // everything including and after args[1]
            textChannel.send(msg) // sending the message in the text channel provided
        }
    }
}