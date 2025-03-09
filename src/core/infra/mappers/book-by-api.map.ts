export class BookByApiMap {

    static toHttp(bookApi: any) {
        return {
            title: bookApi.volumeInfo.title,
            url: bookApi.volumeInfo.previewLink,
            cover: bookApi.volumeInfo.imageLinks?.thumbnail || '/file.svg',
            author: bookApi.volumeInfo.authors[0],
            description: bookApi.volumeInfo.description,
        }
    }
}