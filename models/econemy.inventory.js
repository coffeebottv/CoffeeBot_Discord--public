const mongoose = require('mongoose');
const { Schema } = mongoose


const inventory = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    server: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Server',
            required: true,

            items: [{
                type: Schema.Types.ObjectId, // items ref
                ref: 'Item',
                required: true
            }],
            coins: [{
                type: Schema.Types.ObjectId, // wallet ref
                ref: 'Coin',
                required: true
            }],
        }
    ]
})



module.exports = mongoose.model('Inventory', inventory)