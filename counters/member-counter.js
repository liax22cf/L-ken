module.exports = async (guild, guild_members, message, args, cmd, client, Discord) =>{
    const guild = client.guilds.cache.get('823179880106819595');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('877816719102591047');
        channel.setName(`tot person: ${memberCount.toLocaleString()}`);
        console.log(`Updated MemberCount = ${memberCount})`);
        console.log('Updated MemberCount');
    }, 5000);
}