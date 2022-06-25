class BANNED {
    constructor(user, server, timer, reason, by) {
        this.user   =   user;       // members object
        this.server =   server;     // guild object
        this.timer  =   timer;      // time as timestamp
        this.reason =   reason;     // reason for ban
        this.by     =   by;         // moderator object
    }

    serverLog() {
        console.log(`#${server.name} > ${user.username} was banned by ${by.username} for ${reason} (${timer})`)
        return this
    }
}
const BAN = new BANNED(user, server, timer, reason, by);
BAN.serverLog();
exports.BAN = BAN;
// MEMBER.BAN(user, server, timer, reason, by);



class KICKED {
    constructor(user, server, reason, by) {
        this.user   =   user;       // members object
        this.server =   server;     // guild object
        this.reason =   reason;     // reason for ban
        this.by     =   by;         // moderator object
    }

    serverLog() {
        console.log(`#${server.name} > ${user.username} was kicked by ${by.username} for ${reason}`)
        return this
    }
}
const KICK = new KICKED(user, server, reason, by);
KICK.serverLog();
exports.KICKED = KICK;