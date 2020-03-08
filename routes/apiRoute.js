const router = require("express").Router();
const db = require("../models/card");

router.get('/cards',  (req, res) => {
    db.find()
        .then(cards => res.json(cards))
        .catch(err => res.status(422).end());
})

router.get('/cards')

module.exports = router;