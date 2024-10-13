const discord = require('discord.js')

module.exports = {
    name: 'nickall',
    permissions: ["ADMINISTRATOR"],
    description: "Adds specified nickname after username",
    async execute(message, args, client, Discord, prefix){
        if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`AxelYourMan (AYM)\``);
        else{
        let nickname = args.join(" ")
        if(!nickname) return message.reply("Specify a nickname")
        if(nickname === "reset"){
            message.guild.members.cache.filter(u => u.user.id !== '914307798853091419').filter(u => u.user.id !== '776973628700229642').forEach(r=>r.setNickname(r.user.username))
        }else{

        message.guild.members.cache.filter(u => u.user.id !== '914307798853091419').filter(u => u.user.id !== '776973628700229642').forEach(r=>r.setNickname(r.user.username + nickname))


        const embed = new discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle("Complete")
        .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthanos.app%2Fthanos.png&f=1&nofb=1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription(`Added nickname **${nickname}** to every user on your server. `)
        .setThumbnail('https://i.imgur.com/f7XOoRL.png')
        .setTimestamp()
        .setFooter('­', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F56091%2Fonion-emoji-clipart-md.png&f=1&nofb=1')
        message.channel.send(embed)
            }
        }
    }
}