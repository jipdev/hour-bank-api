export interface CrudService<T, ID> {
  create: (data: T) => Promise<T>;
  update: (id: ID, data: T) => Promise<T>;
  delete: (id: ID) => Promise<T>;
  find: (id: ID) => Promise<T | null>;
  findAll: (params: Partial<T>) => Promise<Partial<T>[] | null>;
}
