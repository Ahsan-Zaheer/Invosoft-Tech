const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})


const form = new mongoose.model("Form", formSchema);
module.exports = form;