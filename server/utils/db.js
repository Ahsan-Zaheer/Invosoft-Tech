const mongoose = require('mongoose');

const URI = 'mongodb+srv://digitalenergyexec:ShadowRing2@cluster0.ntvkyeb.mongodb.net/?retryWrites=true&w=majority';


const connectDb = async() =>{
    try {
        await mongoose.connect(URI)
        console.log('Successfully Connected to the Database');
    } catch (error) {
        console.error("Connection with database failed");
        process.exit(0);
        
    }
}

module.exports = connectDb;