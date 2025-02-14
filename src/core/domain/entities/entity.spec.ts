import { Book } from "./book.entity"

test('book created', () => {
    const bookMock = Book.create({
        title: 'The Hobbit',
        url: 'https://www.example.com',
        cover: 'https://www.example.com/cover.jpg',
        playlistId: '123456',
    });

    expect(bookMock).toBeInstanceOf(Book);
    expect(bookMock.id).toBeDefined();
    expect(bookMock.title).toBe('The Hobbit');
});