const mongoose = require('mongoose');
const { Schema } = mongoose


const rewards = new Schema({
    price: {
        type: Number, // cost of reward
        required: true
    },
    name: {
        type: String, // name of the reward
        required: true
    },
    amount: {
        type: Number, // amount of said items
        required: true,
        default: 1
    },
    id: {
        type: String, // item id (role id)
        required: true
    },
    type: {
        type: String, // 'role' or 'item', etc
        required: true
    },
    description: {
        type: String, // description of the reward
        required: true
    },
})



module.exports = mongoose.model('Rewards', rewards)