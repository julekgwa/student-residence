const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentsSchema = new Schema({
    id_copy_url: {
        type: String,
        required: true,
        trim: true
    },
    proof_of_reg_url: {
        type: String,
        required: true,
        trim: true
    },
    next_of_kin_id_copy_url: {
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

module.exports = mongoose.model('Documents', DocumentsSchema);
