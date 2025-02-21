import { GoogleBooksApiRepository } from "@core/application/repositories/google-books/google-books-api.repository";
import IUseCase from "../usecase.interface";

export type SearchBookByApi = {
    param: string;
    key: string;
}

export class SearchBookByApiUseCase implements IUseCase<SearchBookByApi> {
    constructor(
        private readonly _googleBooksApiRepository: GoogleBooksApiRepository
    ) {}
    
    async execute(param) {
        return this._googleBooksApiRepository.search(param);
    }
}