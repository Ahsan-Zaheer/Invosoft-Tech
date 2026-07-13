const form = require('../models/form-model');

const contact = async(req, res) =>{
    try {
    const response = req.body;
    await form.create(response);
    return res.status(200).json({message: "message send successfully"});
        
    } catch (error) {
        res.status(400).json({msg:"message not delivered. An error occured"});
    }
}


module.exports = {contact};