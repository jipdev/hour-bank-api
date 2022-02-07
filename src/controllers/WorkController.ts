import { Request, Response } from 'express';

import ErrorHandler from '../handlers/ErrorHandler';
import WorkService from '../services/WorkService';
import CrudController from './CrudController';

class WorkController implements CrudController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const job = await WorkService.create(req.body);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id as string;
    try {
      const job = await WorkService.delete(id);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id as string;
    try {
      const job = await WorkService.update(id, req.body);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    const id = req.params.id as string;
    try {
      const job = await WorkService.find(id);
      res.json(job);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await WorkService.findAll(req.query);
      res.json(jobs);
    } catch (e) {
      res.status(500).send(new ErrorHandler(500));
    }
  }
}

export default new WorkController();
