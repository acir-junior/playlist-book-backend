import { Repository } from "@core/application/repositories/repository.interface";
import { PrismaService } from "../services/prisma/prisma.service";
import { Book } from "@core/domain/entities/book.entity";
import { BookMap } from "../mappers/book.map";

export class BookRepository extends PrismaService implements Repository<Book> {

    private _bookModel() {
        return this.books;
    }

    async save(entity: Book): Promise<void> {
        const book = BookMap.toPersist(entity);
        await this._bookModel().create({
            data: book
        });
    }

    async update(entity: Book): Promise<void> {
        const bookData = await BookMap.toPersist(entity);
        // console.log(bookData);
        
        await this._bookModel().update({
            where: {
                id: bookData.id
            },
            data: {
                ...bookData,
                updatedAt: new Date()
            }
        });
    }

    async delete(entity: Book): Promise<void> {
        const book = await BookMap.toPersist(entity);
        console.log(book);
        
        const { id } = book;

        await this._bookModel().delete({
            where: {
                id
            }
        });
    }

    async findById(id: any): Promise<Book> {
        const dataPrisma = await this._bookModel().findUnique({
            where: {
                id
            }
        });
        return BookMap.toEntity(dataPrisma);
    }

    async findAll(): Promise<Book[]> {
        const dataPrisma = await this._bookModel().findMany();
        return dataPrisma.map(data => BookMap.toEntity(data));
    }

}