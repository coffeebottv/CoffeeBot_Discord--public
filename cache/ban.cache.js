const ms = require('ms')


// Banned users map
const BANS = new Map()


const load = (BAN_MEMORY) => {
    const size = Object.keys(BAN_MEMORY).length;

    for (const [key, value] of Object.entries(BAN_MEMORY)) {
        const data = {
            uid: value.uid,
            user: value.username,
            server: value.server,
            time: countdown(value.timer),
            reason: value.reason,
            by: value.by,
        }
        BANS.set(key, data)
    }

    return {
        "CacheSize": BANS.size,
        "MemorySize": size,
        "Complete": BANS.size === size ? `✔️` : `❌`,
        "Map": BANS
    }
}



const countdown = (time = '100y', user, server) => {
    if (!isNaN(time)) return;

    return (
        setTimeout(() => {
            BANS.delete(`${server} - ${user}`)
        }, ms(time))
    )
}


exports.load = load;