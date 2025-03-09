import IUseCase from "../usecase.interface";
import { Repository } from "@core/application/repositories/repository.interface";
import { Playlist } from "@core/domain/entities/playlist.entity";

export type SearchBookById = {
    id: string;
}
export class SearchPlaylistById implements IUseCase<SearchBookById> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(id) {
        const playlist = await this._repository.findById(id);
        if (!playlist) {
            throw new Error('Playlist not found');
        }

        return playlist;
    }
}