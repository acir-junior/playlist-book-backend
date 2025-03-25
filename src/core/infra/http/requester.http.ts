export interface IRequester {
    get(url: string, callback?: () => void): Promise<any>;
    // post(url: string, body: any): Promise<any>;
    // put(url: string, body: any): Promise<any>;
    // delete(url: string): Promise<any>;
}