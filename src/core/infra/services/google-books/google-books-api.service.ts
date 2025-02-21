import { IRequester } from "../../http/requester.http";
import { GoogleBooksApiRepository } from "../../../application/repositories/google-books/google-books-api.repository";
import { config } from "dotenv";

export class GoogleBookApiService implements GoogleBooksApiRepository {

    constructor(
        private _requester: IRequester
    ) {}

    private _key(): string {
        config();
        return process.env.GOOGLE_BOOKS_KEY;
    }

    async search(param: string): Promise<any> {
        const books = await this._requester.get(`https://www.googleapis.com/books/v1/volumes?q=${param}&key=${this._key()}`);
        return books.items;
    }
}
