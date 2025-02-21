import { Book } from "@core/domain/entities/book.entity";
import { Books } from "@prisma/client";

export class BookMap {

    static toPersist(data): Books {
        return {
            id: data.id,
            title: data.title,
            url: data.url,
            cover: data.cover,
            author: data.author,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            playlistId: data.playlistId,
        };
    }

    static toEntity(data: Books): Book | null {
        return data ? new Book({
            title: data.title,
            url: data.url,
            cover: data.cover,
            author: data.author,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            playlistId: data.playlistId,
        }, data.id) : null;
    }

    static toHttp(data: Books) {
        return {
            id: data.id,
            title: data.title,
            url: data.url,
            cover: data.cover,
            author: data.author,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            playlistId: data.playlistId,
        };
    }
}