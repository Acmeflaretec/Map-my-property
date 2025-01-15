const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const projectsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true 
    },
    subtitle: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    builder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Builders',
    },
    description: {
        type: String,
        required: true
    },
    minPrice: {
        type: Number,
        required: true
    },
    maxPrice: {
        type: Number,
        required: true
    },
    href: { type: String },

    ongoing: {
        type: String,
    },
    upcoming: {
        type: String,
    },
    completed: {
        type: String,
    },
    location: {
        type: String,
    },

    expertOpinions: {
        type: [String]
    },
    bedrooms: {
        type: [String],
    },
    areas: {
        type: [String],
    },
    features: [
        {
          title: String,
          items: [
            {
              text: String,
              helpertext: String,
              icon: String,
            },
          ],
        },
      ],
    faqs: [{
        questions: String,
        answer: String
    }],
    masterPlan: {
        title: String,
        desc: String,
        src: String,
    },
    imageGallery: [
        {
            title: String,
            desc: String,
            src: String,
        },
    ],
    plans: [
        {
            title: String,
            desc: String,
            src: String,
        },
    ],
    accommodation: [
        {
            unit: String,
            area: String,
            price: String,
        },
    ],
    isAvailable: {
        type: Boolean,
        default: true
    },

    testimonials: [{
        name: String,
        rating: String,
        review: String,
        image: String,
    }],

},
    {
        timestamps: true
    });


projectsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Projects', projectsSchema)