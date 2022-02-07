import { Work } from '@prisma/client';

import prisma from '../infra/prisma';
import { CrudService } from './CrudService';

class WorkService implements CrudService<Work, string> {
  create(data: Work): Promise<Work> {
    return prisma.work.create({ data });
  }

  update(id: string, data: Work): Promise<Work> {
    return prisma.work.update({
      data,
      where: {
        id,
      },
    });
  }

  delete(id: string): Promise<Work> {
    return prisma.work.delete({
      where: {
        id,
      },
    });
  }

  find(id: string): Promise<Work | null> {
    return prisma.work.findFirst({
      where: {
        id,
      },
    });
  }

  findAll(params: Partial<Work>): Promise<Partial<Work>[] | null> {
    return prisma.work.findMany({
      where: { ...params },
      select: {
        id: true,
        startedAt: true,
        endedAt: true,
      },
    });
  }
}

export default new WorkService();
