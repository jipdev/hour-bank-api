import express from 'express';

import WorkController from '../controllers/WorkController';

const WorkRoutes = express.Router();

WorkRoutes.get('/works', WorkController.findAll);
WorkRoutes.get('/works/:id', WorkController.find);
WorkRoutes.post('/works', WorkController.create);
WorkRoutes.put('/works/:id', WorkController.update);
WorkRoutes.delete('/works/:id', WorkController.delete);

export default WorkRoutes;
