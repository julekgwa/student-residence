const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    studentID: {
        type: String,
        default: undefined
    },
    roomNo: {
        type: Number,
        required: true,
        unique: true
    },
    occupiedDate: {
        type: Date,
        default: undefined
    },
    availableDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: undefined
    },
    available: {
        type: Boolean,
        default: true
    },
    floor: {
        type: Number,
        default: undefined
    },
    rate: {
        type: Number,
        default: undefined
    }
});

module.exports = mongoose.model('Room', RoomSchema);