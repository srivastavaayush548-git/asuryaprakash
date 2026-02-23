const mongoose = require('mongoose');

const MediaItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        enum: ["video", "image"],
        default: "image"
    },
    src: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    order: {
        type: Number,
        default: 0
    }
});

const MediaSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    media: [MediaItemSchema],
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('MediaSection', MediaSectionSchema);
