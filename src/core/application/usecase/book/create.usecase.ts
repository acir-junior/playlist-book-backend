import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Book } from "@core/domain/entities/book.entity";

export type CreateBook = {
    title: string;
    url: string;
    cover: string;
    playlistId: string;
}

export class CreateBookUseCase implements IUseCase<CreateBook> {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(data) {
        const book = Book.create(data);
        if (!book) {
            throw new Error('Book not found');
        }

        await this._repository.save(book);
    }
}