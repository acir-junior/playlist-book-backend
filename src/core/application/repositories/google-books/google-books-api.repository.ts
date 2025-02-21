export interface GoogleBooksApiRepository {
    search(param: string): Promise<any>;
}
