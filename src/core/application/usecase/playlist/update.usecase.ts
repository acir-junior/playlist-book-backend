import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { NotFoundException } from "@nestjs/common";
import { Playlist } from "@core/domain/entities/playlist.entity";

export class UpdatePlaylistUseCase implements IUseCase<UpdatePlaylistUseCase> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(props: any): Promise<void> {
        const { id, ...rest } = props;
        const playlistFound = await this._repository.findById(id);
        
        if (!playlistFound) {
            throw new NotFoundException("Playlist not found");
        }
        
        playlistFound.updateProps({ ...rest });
        await this._repository.update(playlistFound);
    }

}
    