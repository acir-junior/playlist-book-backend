import { config } from "dotenv";
import { AxiosHttp } from "../../http/axios.http";
import { GoogleBookApiService } from "./google-books-api.service";

describe('GoogleBookApiService', () => {
    config();
    const apiKey = process.env.GOOGLE_BOOKS_KEY;
    
    test('request book by param and key in google books api', async () => {
        const axiosHttp = new AxiosHttp();
        const googleBooksApiService = new GoogleBookApiService(axiosHttp);
        const booksByGoogle = await googleBooksApiService.search('anjos', apiKey);
        console.log(booksByGoogle);
        
        expect(booksByGoogle).toBeDefined();
    })
});