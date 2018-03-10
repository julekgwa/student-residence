const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaitingListSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('RoomWaitingList', WaitingListSchema);