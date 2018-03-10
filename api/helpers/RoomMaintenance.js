const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaintenanceSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    roomNo: {
        type: Number,
        required: true
    },
    reportedDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('RoomMaintenance', MaintenanceSchema);
