import { Playlist } from "@core/domain/entities/playlist.entity";
import { Playlist as PrismaPlaylist } from "@prisma/client";

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

    static toEntity(data: PrismaPlaylist): Playlist | null {
        return data ? new Playlist({
            title: data.title,
            description: data.description,
            author: data.author,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        }, data.id) : null;
    }

    static toHttp(data: PrismaPlaylist) {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            author: data.author,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        }
    }
}