import express from 'express';

import JobController from '../controllers/JobController';

const JobsRoutes = express.Router();

JobsRoutes.get('/jobs', JobController.findAll);
JobsRoutes.get('/jobs/:id', JobController.find);
JobsRoutes.post('/jobs', JobController.create);
JobsRoutes.put('/jobs/:id', JobController.update);
JobsRoutes.delete('/jobs/:id', JobController.delete);

export default JobsRoutes;
