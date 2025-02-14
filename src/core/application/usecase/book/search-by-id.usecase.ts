import { Repository } from "core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Book } from "core/domain/entities/book.entity";

export type SearchBook = {
    id: string;
}

export class SearchByIdBookUseCase implements IUseCase<SearchBook> {
    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(data) {
        const book = await this._repository.findById(data);
        return book.toJson();
    }
}