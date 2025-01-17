const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        default: 'type one',
        enum: ['type one', 'type two', 'type three']
    },
    image: {
        type: String,
        required: true
    },
    isImportant: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Blog', blogSchema)