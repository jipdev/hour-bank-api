import express from 'express';

import JobController from '../controllers/JobController';

const JobRoutes = express.Router();

JobRoutes.get('/jobs', JobController.findAll);
JobRoutes.get('/jobs/:id', JobController.find);
JobRoutes.post('/jobs', JobController.create);
JobRoutes.put('/jobs/:id', JobController.update);
JobRoutes.delete('/jobs/:id', JobController.delete);

export default JobRoutes;
