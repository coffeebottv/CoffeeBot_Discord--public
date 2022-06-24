const mongoose = require('mongoose');
const { Schema } = mongoose


const badgeSchema = new Schema({
    id: String,
    name: String,
    unlocked: Date
})


const member = new Schema({
    name: String,
    id: Number,
    discriminator: String,
    server: [
        {
            badges: [badgeSchema],
            exp: Number, // members exp amount in the server
            level: Number, // membgers level in the server
            serverID: mongoose.Schema.Types.ObjectId, // server ref
            lastMessage: Date, // date of last message
            Warnings: Number, // number of warnings given
            Banned: String, // Reason
        }
    ],
    badges: [badgeSchema],
    banner: String, // banner (linked to image)
    frame: String, // frame (linked to image)
})



module.exports = mongoose.model('Member', member)