import { Repository } from "@core/application/repositories/repository.interface";
import { PrismaService } from "../services/prisma/prisma.service";
import { PlaylistMap } from "../mappers/playlist.map";
import { Playlist } from "@core/domain/entities/playlist.entity";

export class PlaylistRepository extends PrismaService implements Repository<Playlist> {

    private _playlistModel() {
        return this.playlist;
    }

    async save(entity: Playlist): Promise<void> {
        const playlist = PlaylistMap.toPersist(entity);
        await this._playlistModel().create({
            data: playlist
        })
    }

    async update(entity: Playlist): Promise<void> {
        const playlistData = await PlaylistMap.toPersist(entity);

        await this._playlistModel().update({
            where: {
                id: playlistData.id
            },
            data: {
                ...playlistData,
                updatedAt: new Date()
            }
        });
    }

    async delete(entity: Playlist): Promise<void> {
        const playlist = await PlaylistMap.toPersist(entity);

        await this._playlistModel().delete({
            where: {
                id: playlist.id
            }
        });
    }

    async findById(id: any): Promise<Playlist> {
        const dataPrisma = await this._playlistModel().findUnique({
            where: {
                id: id
            },
            include: {
                books: true
            }
        });

        return PlaylistMap.toEntity(dataPrisma);
    }

    async findAll(): Promise<Playlist[]> {
        const dataPrisma = await this._playlistModel().findMany({
            include: {
                books: true
            }
        });
        
        return dataPrisma.map(PlaylistMap.toEntity);
    }

}