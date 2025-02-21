import { Book } from "./book.entity"

test('book created', () => {
    const bookMock = Book.create({
        title: 'The Hobbit',
        url: 'https://www.example.com',
        cover: 'https://www.example.com/cover.jpg',
        author: 'J.R.R. Tolkien',
        description: 'In a hole in the ground there lived a hobbit.',
        playlistId: '123456',
        createdAt: new Date(),
    });

    expect(bookMock).toBeInstanceOf(Book);
    expect(bookMock.id).toBeDefined();
    expect(bookMock.title).toBe('The Hobbit');
});