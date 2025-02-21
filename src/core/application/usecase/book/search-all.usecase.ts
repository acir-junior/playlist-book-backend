import { Repository } from "core/application/repositories/repository.interface";
import { Book } from "core/domain/entities/book.entity";
import IUseCase from "../usecase.interface";

export class SearchAllUseCase implements IUseCase<Book[]> {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(): Promise<Book[]> {
        const books = await this._repository.findAll();
        return books;
    }
}