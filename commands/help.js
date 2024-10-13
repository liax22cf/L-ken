const discord = require('discord.js')


module.exports = {
    name: 'help',
    cooldown: 10,
    permissions: [],
    description: 'Sends help',
    execute(message, args, cmd, client, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle('✦ Ｌöｋｌｉｇａｎ ✦')
        .setURL('https://discord.gg/A3wF6rp8EM')
        .setDescription('Ｈｅｌｐ ｓｅｒｖｉｃｅ')
        .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthanos.app%2Fthanos.png&f=1&nofb=1', 'https://discord.gg/S4YB4gc9bx')
        .setThumbnail('https://i.imgur.com/f7XOoRL.png')
        .addFields(
            {name: 'Prefix:', value: '$', inline: false},
            {name: 'Commands:', value: 'help  -  ping  -  members  -  servers  -  remind  -  nickall  -  status', inline: false}
        )
        .setFooter('­', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F56091%2Fonion-emoji-clipart-md.png&f=1&nofb=1')
        
        const sentHelpEmbed = new Discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle('­')
        .setDescription('Ｈｅｌｐ  ­ ­ ­ｓｅｎｔ')
        .setThumbnail('https://i.imgur.com/f7XOoRL.png')

        message.author.send(helpEmbed);
        message.channel.send(sentHelpEmbed);
    }
}