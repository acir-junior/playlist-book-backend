import { Repository } from "core/application/repositories/repository.interface";
import { Book } from "core/domain/entities/book.entity";

export class SearchAllUseCase {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(): Promise<Book[]> {
        return await this._repository.findAll();
    }
}