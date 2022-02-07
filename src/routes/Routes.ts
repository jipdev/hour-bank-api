import express from 'express';

import JobsRoutes from './JobsRoutes';

const Routes = express.Router();

Routes.use(JobsRoutes);

export default Routes;
