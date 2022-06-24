const mongoose = require('mongoose');
const { Schema } = mongoose


const log = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('Log', log)