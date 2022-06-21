const mongoose = require('mongoose');
const { Schema } = mongoose


const badges = new Schema({
    id: String,
    name: String,
    description: String,
    image: String,
    
    info: {
        unlockableEnd: Date, // not unlockable after this date
        unlockableStart: Date, // not unlockable before this date
        unlockableCreated: Date, // date created
    }
})



module.exports = mongoose.model('Badge', badges)