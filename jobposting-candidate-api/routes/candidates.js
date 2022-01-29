const router = require('express').Router();
const Candidates = require('../models/candidate');



router.get('/candidates', async (req, res) => {
    try{
    res.send(await Candidates.findAll());
    }
    catch(error){
        console.log(error);
    }
});

router.post('/candidates', async (req, res) => {
    const candidate = new Candidates(req.body);
    res.send(await candidate.save());
});

router.put('/candidates/:id', async (req, res) => {
    res.send(await Candidates.findByPk(req.params.id));
});

router.delete('/candidates/:id', async (req, res) => {
    const candidate = await Candidates.findByPk(req.params.id);
    await candidate.destroy();
    res.status(204).send();
});

module.exports = router;
