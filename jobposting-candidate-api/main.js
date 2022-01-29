const server = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const candidatesRouter = require('./routes/candidates');
const jobPostingsRouter = require('./routes/job-postings');

const PORT = 8080;

server.use(cors());
server.use(bodyParser.json());

server.use(candidatesRouter);
server.use(jobPostingsRouter);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
