require('dotenv/config')
const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('MongoDB connected')
}, (err) => console.error(err))


exports.connection = connection