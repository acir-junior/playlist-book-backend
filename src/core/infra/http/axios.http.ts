import axios from "axios";
import { IRequester } from "./requester.http";

export class AxiosHttp implements IRequester {
    app: any;

    constructor() {
        this.app = axios.create();
    }

    async get(url: string): Promise<any> {
        console.log('url', url);
        
        const request = await this.app.get(url);
        return await request.data;
    }
}