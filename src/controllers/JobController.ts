import { Request, Response } from 'express';

import ErrorHandler from '../handlers/ErrorHandler';
import JobService from '../services/JobService';
import CrudController from './CrudController';

class JobController implements CrudController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const job = await JobService.create(req.body);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params.id as string, 10);
    try {
      const job = await JobService.delete(id);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params.id as string, 10);
    try {
      const job = await JobService.update(id, req.body);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params.id as string, 10);
    try {
      const job = await JobService.find(id);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await JobService.findAll(req.query);
      res.json(jobs);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }
}

export default new JobController();
