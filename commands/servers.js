module.exports = {
    name: 'servers',
    cooldown: 10,
    permissions: [],
    description: 'Displays all servers Lökligan has dominated on',
    async execute(message, args, cmd, client, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle('✦ Ｌöｋｌｉｇａｎ ✦')
        .setURL('https://discord.gg/6wJWT6jP4r')
        .setDescription('Ｄｏｍｉｎａｔｅｄ­  ­ ­ ­ ­ ­ ­Ｓｅｒｖｅｒｓ')
        .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthanos.app%2Fthanos.png&f=1&nofb=1', 'https://discord.gg/S4YB4gc9bx')
        .setThumbnail('https://i.imgur.com/f7XOoRL.png')
        .addFields(
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: 'b̾o̾n̾k̾c̾a̾f̾t̾.̾s̾e̾     ­       ­', value: 'finshed', inline: true},
            {name: 'alivebox.minehut.gg     ­       ­', value: 'finshed', inline: true},
            {name: 'open.90gq.se     ­       ­', value: 'finished', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­sharkmc.se', value: 'finished', inline: true},
            {name: '­­donutsmp.net', value: 'in progress­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: '­­', value: '­', inline: true},
            {name: 'and more to come... ­       ­', value: '­', inline: true}
        )
        .setTimestamp()
        .setFooter('latest update', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F56091%2Fonion-emoji-clipart-md.png&f=1&nofb=1')

        message.channel.send(helpEmbed);
    }
}