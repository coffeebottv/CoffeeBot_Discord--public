const mongoose = require('mongoose');
const { Schema } = mongoose


const member = new Schema({
    name: String,
    id: Number,
    discriminator: String,
    server: [
        {
            badges: [ // server specific badges
                {
                    id: String,
                    name: String
                }
            ],
            exp: Number, // members exp amount in the server
            level: Number, // membgers level in the server
            serverID: Number, // server id
            lastMessage: Date, // date of last message
            Warnings: Number, // number of warnings given
            Banned: String, // Reason
        }
    ],
    badges: [ // global badges
        {
            id: String,
            name: String,
        }
    ],
    banner: String, // banner (linked to image)
    frame: String, // frame (linked to image)
})



module.exports = mongoose.model('Member', member)