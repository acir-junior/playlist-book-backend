import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";
import { Playlist } from "@prisma/client";
import { NotFoundException } from "@nestjs/common";

export class DeletePlaylistUseCase implements IUseCase<string> {
    
    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(id: string) {
        const playlist = await this._repository.findById(id);
        if (!playlist) {
            throw new NotFoundException('Playlist not found');
        }

        await this._repository.delete(playlist);
        return 'Playlist deleted successfully';
    }
}