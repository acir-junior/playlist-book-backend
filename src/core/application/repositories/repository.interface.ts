export interface Repository<T> {
    save(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    delete(entity: T): Promise<void>;
    findById(id: any): Promise<T>;
    findAll(): Promise<T[]>;
}