const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: [], partials: ["MESSAGE", "CHANNEL", "REACTION"]});
/* const { drawCard, Gradient } = require('discord-welcome-card') */

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})





/* När någon joinar servern */
client.on('guildMemberAdd', async guildMember =>{

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '💲 Fans');
    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache.get('900103964916334706').send(`Välkommen <@${guildMember.user.id}>! Här luktar det lök. :onion:`);

    client.channels.cache.get('917895109968818176').setName(`Members: ${guildMember.guild.memberCount}`)

    /* const image = await drawCard({
        text: {
            title: '\t     ­Välkommen!',
            text: `\t${guildMember.user.tag}`,
            subtitle: `\n    ­Antal medlemmar: ${guildMember.guild.memberCount}`,
            color:  new Gradient("linear", {
                 color: "#000000",
                offset: 0
                }, {
                color: "#8067f5",
                 offset: 100
                 })
        },
        avatar: {
            image: guildMember.user.avatarURL({ format: 'png' })
        },
        blur: true,
        border: true,
        rounded: true
    })
guildMember.guild.channels.cache.get('900103964916334706').send(`<@${guildMember.user.id}>\t\t${guildMember.user.tag}`)
guildMember.guild.channels.cache.get('900103964916334706').send(new Discord.MessageAttachment(image, 'custom.png')) */
});

/* När någon lämnar servern */
client.on('guildMemberRemove', member => {
    client.channels.cache.get('900108846368972861').send(`${member} has left the server\n***${member.user.tag}***`)

    client.channels.cache.get('917895109968818176').setName(`Members: ${member.guild.memberCount}`)
    client.channels.cache.get('921731834495250462').setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
    client.channels.cache.get('921732689210523688').setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
});

/* När någon dm:ar boten */
client.on('message', (message) => {
    if(message.author.client) return;
    if(message.channel.type === "dm"){
        const dmEmbed = new Discord.MessageEmbed()
        .setTitle('New DM')
        .setColor('#0x37ff00')
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content:** \`\`\`${message.content}\`\`\``)
        
        const DMC = client.channels.cache.get('900108846368972861');
        DMC.send(dmEmbed)
    }
})

/* Sätter activity vid uppstart & ändrar till rätt namn*/
client.on('ready', async() => {
    client.user.setActivity('LÖKLIGAN RULE', {type: 'WATCHING'});

    setInterval(function(){
        client.guilds.cache.get('900103964916334703').setName('✦ Ｌöｋｌｉｇａｎ ✦');
    },15000)
})










client.login(process.env.DISCORD_TOKEN);