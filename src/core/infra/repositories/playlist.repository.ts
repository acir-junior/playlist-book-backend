import { Repository } from "@core/application/repositories/repository.interface";
import { PrismaService } from "../services/prisma/prisma.service";
import { Playlist } from "@prisma/client";

export class PlaylistRepository extends PrismaService implements Repository<Playlist> {

    private _playlistModel() {
        return this.playlist;
    }

    async save(entity: Playlist): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(entity: Playlist): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(entity: Playlist): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: any): Promise<Playlist> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<Playlist[]> {
        throw new Error("Method not implemented.");
    }

}