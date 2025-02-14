import { GoogleBookApiService } from "core/infra/services/google-books/google-books-api.service";
import IUseCase from "../usecase.interface";

export type SearchBookByApi = {
    param: string;
    key: string;
}

export class SearchBookByApiUseCase implements IUseCase<SearchBookByApi> {
    constructor(
        private readonly _googleBooksApiRepository: GoogleBookApiService
    ) {}
    
    async execute(data) {
        return this._googleBooksApiRepository.search(data.param, data.key);
    }
}