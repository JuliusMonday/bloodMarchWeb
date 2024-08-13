const mongoose = require('mongoose');

// BloodGroup Schema
const BloodGroupSchema = mongoose.Schema({
    bloodGroup: {
        type: String,
        required: true
    },
    donors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donor'
        // required: true

    }]
});

const BloodGroup =  mongoose.model('BloodGroup', BloodGroupSchema);
module.exports = BloodGroup;