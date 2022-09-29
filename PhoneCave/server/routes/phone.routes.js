const router = require("express").Router();
// get json data
const phoneData = require('../data/phones.json');


// /phones - GET Show all phones 
router.get('/phones', (req, res) => {
    return res.json(phoneData);
})

// /phones/:id	- GET	Show a phone details
router.get('/phones/:id', (req, res) => {
    const phoneId = req.params.id; 
    const phoneDetail = phoneData.filter(phone => phone.id == phoneId)
    return res.json(phoneDetail);
})
module.exports = router;