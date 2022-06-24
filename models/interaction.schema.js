const mongoose = require('mongoose');
const { Schema } = mongoose


const interactions = new Schema({
    serverID: mongoose.Schema.Types.ObjectId, // server ref
    reactions: [
        {
            input: {
                type: String,
                required: true,
            },
            output: {
                type: String,
                required: true,
            },
        }
    ],
    reply: [
        {
            input: {
                type: String,
                required: true,
            },
            output: {
                type: String,
                required: true,
            },
        }
    ]
})



module.exports = mongoose.model('Interactions', interactions)