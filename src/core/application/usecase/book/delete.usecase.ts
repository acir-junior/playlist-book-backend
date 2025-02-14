import { Repository } from "core/application/repositories/repository.interface";
import { Book } from "core/domain/entities/book.entity";

export class DeleteBookUseCase {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(id: string): Promise<void> {
        const book = await this._repository.findById(id);
        await this._repository.delete(book);
    }
}