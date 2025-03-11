import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Playlist } from "@core/domain/entities/playlist.entity";

export type CreatePlaylist = {
    title: string;
    description: string;
    author: string;
};

export class CreatePlaylistUseCase implements IUseCase<CreatePlaylist> {
    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(data) {
        const playlist = Playlist.create(data);
        if (!playlist) {
            throw new Error('Playlist not found');
        }

        await this._repository.save(playlist);
    }
}
