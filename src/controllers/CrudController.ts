import { Request, Response } from 'express';

export default interface CrudController {
  create: (req: Request, res: Response) => Promise<void>;
  update: (req: Request, res: Response) => Promise<void>;
  delete: (req: Request, res: Response) => Promise<void>;
  find: (req: Request, res: Response) => Promise<void>;
  findAll: (req: Request, res: Response) => Promise<void>;
}
