const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepositSchema = new Schema({
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

module.exports = mongoose.model('Deposit', DepositSchema);