export interface GoogleBooksApiRepository {
    search(param: string, key: string): Promise<any>;
}
