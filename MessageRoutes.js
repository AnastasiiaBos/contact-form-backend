const express = require('express');
const router = express.Router();
const MessageModel = require('./MessageModel');


router.post('/form-submitted', (req, res) => {
    const newMessage = new MessageModel({
        
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newMessage.save();
    res.send(`Form was sent`)
});

module.exports = router;