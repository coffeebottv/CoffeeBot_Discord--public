const mongoose = require('mongoose');
const { Schema } = mongoose


const wallet = new Schema({
    user: {
        type: Schema.Types.ObjectId, // user ref
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
})



module.exports = mongoose.model('Wallet', wallet)