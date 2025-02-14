import { IRequester } from "../../http/requester.http";
import { GoogleBooksApiRepository } from "../../../application/repositories/google-books/google-books-api.repository";

export class GoogleBookApiService implements GoogleBooksApiRepository {

    constructor(
        private _requester: IRequester
    ) {}

    async search(param: string, key: string): Promise<any> {
        const books = await this._requester.get(`https://www.googleapis.com/books/v1/volumes?q=${param}&key=${key}`);
        return books.items;
    }
}
