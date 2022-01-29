const router = require('express').Router();
const JobPostings = require('../models/job-posting');

router.get('/job-postings', async (req, res) => {
    res.send(await JobPostings.findAll());
});

router.post('/job-postings', async (req, res) => {
    const jobPosting = new JobPostings(req.body);
    res.send(await jobPosting.save());
});

router.put('/job-postings/:id', async (req, res) => {
    res.send(await JobPostings.findByPk(req.params.id));
});

router.delete('/job-postings/:id', async (req, res) => {
    const jobPosting = await JobPostings.findByPk(req.params.id);
    await jobPosting.destroy();
    res.status(204).send();
});

module.exports = router;
