import express from 'express';

import JobRoutes from './JobRoutes';
import WorkRoutes from './WorkRoutes';

const Routes = express.Router();

Routes.use(JobRoutes);
Routes.use(WorkRoutes);

export default Routes;
