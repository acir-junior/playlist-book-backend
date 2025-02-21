import { BookRepository } from "./book.repository";
import { CreateBookUseCase } from "@core/application/usecase/book/create.usecase";
import { UpdateBookUsecase } from "@core/application/usecase/book/update.usecase";
import { DeleteBookUseCase } from "@core/application/usecase/book/delete.usecase";
import { SearchByIdBookUseCase } from "@core/application/usecase/book/search-by-id.usecase";
import { SearchAllUseCase } from "@core/application/usecase/book/search-all.usecase";

describe('BookRepository integration', () => {
    test('create a book', async () => {
        const createBookUC = new CreateBookUseCase(new BookRepository());
        await createBookUC.execute({
            title: 'title',
            url: 'url',
            cover: 'cover',
            createdAt: new Date(),
            playlistId: 'cm727mrmv00003j6iwdiekdqw'
        });
        
        expect(createBookUC).toBeDefined();
    });

    test.only('update a book', async () => {
        const updateBookUC = new UpdateBookUsecase(new BookRepository());
        await updateBookUC.execute({
            id: 'kafoe22sdtiydhcie3idsje8',
            title: 'title',
            author: 'author77',
            description: 'description22',
        });

        expect(updateBookUC).toBeDefined();
    });

    test.only('delete a book', async () => {
        const deleteBookUC = new DeleteBookUseCase(new BookRepository());
        deleteBookUC.execute('kafoe22sdtiydhcie3idsje8');
    });

    test.only('find a book', async () => {
        const searchBookByIdUC = new SearchByIdBookUseCase(new BookRepository());
        const bookById = await searchBookByIdUC.execute('md1lt2jk0qb1uljbpmphd6xh');
        
        expect(searchBookByIdUC).toBeDefined();
        expect(searchBookByIdUC).toBeInstanceOf(SearchByIdBookUseCase);
        expect(bookById).not.toBeNull();
        if (bookById) {
            expect(bookById.url).toBe('undefined');
        }
    });

    test.only('find all books', async () => {
        const searchAllBooksUC = new SearchAllUseCase(new BookRepository());
        const books = await searchAllBooksUC.execute();

        expect(books).toBeDefined();
    });
});