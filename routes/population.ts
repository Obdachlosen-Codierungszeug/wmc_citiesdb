let express = require('express');
let router = express.Router();

let City = require('../city');

router.get('/cities', async (req, res) => {
    try {
        res.json(await City.find());
    } catch (err) {
        res.status(500).json({error: 'Internal server error.'});
        console.log(err);
    }
});

router.get('/cities/:id', async (req, res) => {
    try {
        let city = await City.findById(req.params.id);

        if (!city) {
            res.status(404).json({error: 'City not found.'});
            return;
        }

        res.json(city);
    } catch (err) {
        res.status(500).json({error: 'Internal server error.'});
        console.log(err);
    }
});

router.post('/cities', async (req, res) => {
    try {
        const city = new City();

        city.continent = req.body.continent;
        city.country = req.body.country;
        city.name = req.body.name;
        city.population = req.body.population

        let item = await city.save();

        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({error: 'Internal server error.'});
        console.log(err);
    }
});

module.exports = router;
