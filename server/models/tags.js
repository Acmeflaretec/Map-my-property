const mongoose = require('mongoose')

const tagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    projects: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'projects',
          required: true,
        },
      ],
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Tags', tagSchema)