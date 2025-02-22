import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Book } from "@core/domain/entities/book.entity";
import { NotFoundException } from "@nestjs/common";

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
            throw new NotFoundException('Book not found');
        }

        await this._repository.save(book);
        return 'Book created successfully';
    }
}