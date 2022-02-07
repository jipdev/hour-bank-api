import { Job } from '@prisma/client';

import prisma from '../infra/prisma';
import { CrudService } from './CrudService';

class JobService implements CrudService<Job, number> {
  create(data: Job): Promise<Job> {
    return prisma.job.create({ data });
  }

  update(id: number, data: Job): Promise<Job> {
    return prisma.job.update({
      data,
      where: {
        id,
      },
    });
  }

  delete(id: number): Promise<Job> {
    return prisma.job.delete({
      where: {
        id,
      },
    });
  }

  find(id: number): Promise<Job | null> {
    return prisma.job.findFirst({
      where: {
        id,
      },
    });
  }

  findAll(params: Partial<Job>): Promise<Partial<Job>[] | null> {
    return prisma.job.findMany({
      where: { ...params },
      select: {
        id: true,
        name: true,
        price: true,
      },
    });
  }
}

export default new JobService();
