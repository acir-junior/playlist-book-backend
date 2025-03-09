import { Playlist } from "@core/domain/entities/playlist.entity";
import { Books, Playlist as PrismaPlaylist } from "@prisma/client";
import { BookMap } from "./book.map";

interface PlaylistJoin extends PrismaPlaylist {
    books?: Books[]
}

export class PlaylistMap {

    static toPersist(data): PrismaPlaylist {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            author: data.author,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
    }

    static toEntity(data: PlaylistJoin): Playlist | null {
        return data ? new Playlist({
            title: data.title,
            description: data.description,
            author: data.author,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            books: data.books ? data.books.map(BookMap.toEntity) : [],
        }, data.id) : null;
    }

    static toHttp(data: Playlist) {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            author: data.author,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            books: data.books ? data.books.map(BookMap.toHttp) : [],
        }
    }
}