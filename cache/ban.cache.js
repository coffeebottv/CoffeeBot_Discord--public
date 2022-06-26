const ms = require('ms')


// Banned users map
const BANS = new Map()


const load = (BAN_MEMORY) => {
    const size = Object.keys(BAN_MEMORY).length;

    for (const [key, value] of Object.entries(BAN_MEMORY)) {
        const data = {
            member: value.member,
            server: value.server,
            time: countdown(value.timer, value.member, value.server),
            reason: value.reason,
            by: value.by,
        }
        BANS.set(`${value.server.id} - ${value.member.uid}`, data)
    }

    return {
        "CacheSize": BANS.size,
        "MemorySize": size,
        "Complete": BANS.size === size ? `✔️` : `❌`,
        "Map": BANS
    }
}



const countdown = (time = '100y', user, server) => {
    

    return (
        setTimeout(() => {
            console.log(user.username + ' has been unbanned from ' + server.name)
            // BANS.delete(`${server.id} - ${user.id}`)
        }, ms(time))
    )
}


exports.load = load;