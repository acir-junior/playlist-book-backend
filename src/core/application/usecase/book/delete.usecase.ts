import { Repository } from "core/application/repositories/repository.interface";
import { Book } from "core/domain/entities/book.entity";
import IUseCase from "../usecase.interface";

export class DeleteBookUseCase implements IUseCase<string> {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(id: string): Promise<void> {
        const book = await this._repository.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }

        await this._repository.delete(book);
    }
}