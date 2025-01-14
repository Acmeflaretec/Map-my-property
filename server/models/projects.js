const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const projectsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    subheading: {
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
        type: String,
        required: true
    },
    maxPrice: {
        type: String,
        required: true
    },
    href: { type: String },
    BuilderDescription: {
        type: String,
        required: true
    },
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

    ExpertOpinions: {
        type: [String]
    },
    Bedrooms: {
        type: [String],
    },
    Areas: {
        type: [String],
    },
    configurations: [{
        configuration: String,
        details: String,
        icon: String,
    }],
    ApartmentAmenities: [{
        text: String,
        helpertext: String,
        icon: String,
    }],
    LocationAdvantages: [{
        text: String,
        helpertext: String,
        icon: String,
    }],
    faqs: [{
        questions: String,
        answer: String
    }],
    unit: [{
        unitType: String,
        configurationSize: String,
        icon: String,
    }],
    Spec: [{
        Specifications: String,
        SpecificationsDetails: String,
        icon: String,
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
    floorPlans: [
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
    image: {
        type: Array,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },

    reviews: [{
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