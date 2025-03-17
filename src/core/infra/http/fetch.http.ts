import { IRequester } from "./requester.http";

export class FetchHttp implements IRequester {

    async get(url: string): Promise<any> {
        const request = await fetch(url, {
            headers: {
                'Accept-Language': 'pt-BR;pt;q=0.9'
            }
        });
        return await request.json();
    }
}