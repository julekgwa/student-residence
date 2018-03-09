const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NextOfKinSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    work_address: {
        type: String,
        required: true,
        trim: true
    },
    physical_address: {
        type: String,
        required: true,
        trim: true
    },
    relationship: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

module.exports = mongoose.model('NextOfKin', NextOfKinSchema);
