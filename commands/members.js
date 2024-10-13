const { Channel } = require("discord.js")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'members',
    cooldown: 30,
    permissions: [],
    description: 'Displays all members of Lökligan',
    execute(message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle('✦ Ｌöｋｌｉｇａｎ ✦')
        .setURL('https://discord.gg/6wJWT6jP4r')
        .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthanos.app%2Fthanos.png&f=1&nofb=1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('Ｍ ｅ ｍ ｂｅｒｓ  🧅')
        .setThumbnail('https://i.imgur.com/f7XOoRL.png')
        .addFields(
            {name: '𝚡𝚍𝚞𝚌𝚔𝚢𝚐𝚊𝚖𝚎𝚛𝚑𝚍', value: 'alfred#1562', inline: true},
            {name: '𝙰𝚡𝚎𝚕𝚈𝚘𝚞𝚛𝙼𝚊𝚗', value: 'AxelYourMan#0665', inline: true},
            {name: '𝙼𝚊𝚜𝚝𝚎𝚛 𝚃𝚑𝚎o 𝙿', value: 'Master Theo P#8568', inline: true},
            {name: '𝚂𝚑𝚊𝚞𝚗_𝚂𝚑𝚎𝚎𝚙', value: 'Shaun_Sheep#1987', inline: true},
            {name: '𝚌𝚑𝚒𝚣𝚋𝚎𝚛𝚙𝚖𝚎', value: 'chizberpme#9318', inline: true},
            {name: '𝚂𝚖𝚊𝚞𝚐𝚂𝙳', value: 'SmaugSD#7757', inline: true},
            {name: '𝙽𝚒𝚌𝚖𝚞𝚣', value: 'Nicmuz#4840', inline: true},
            {name: '𝙲𝚊𝚛𝚕0𝟼', value: 'CarlB06#6049', inline: true},
            {name: '𝚂𝚝𝚏𝟺𝚗', value: 'Stefan#9000', inline: true}
        )
        .setTimestamp()
        .setFooter('latest update', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F56091%2Fonion-emoji-clipart-md.png&f=1&nofb=1')

        message.channel.send(newEmbed);
    }
}