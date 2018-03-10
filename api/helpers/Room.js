const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    studentID: {
        type: String
    },
    roomNo: {
        type: Number,
        required: true
    },
    occupiedDate: {
        type: Date
    },
    availableDate: {
        type: Date
    },
    status: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    floor: {
        type: Number
    },
    rate: {
        type: Number
    }
});

module.exports = mongoose.model('Room', RoomSchema);