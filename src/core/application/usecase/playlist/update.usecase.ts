import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Playlist } from "@core/domain/entities/playlist.entity";

export class UpdatePlaylistUseCase implements IUseCase<any> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(props: any): Promise<void> {
        const { id, ...rest } = props;
        const playlistFound = await this._repository.findById(id);
        
        if (!playlistFound) {
            throw new Error("Playlist not found");
        }
        
        playlistFound.updateProps({ ...rest });
        await this._repository.update(playlistFound);
    }

}
    