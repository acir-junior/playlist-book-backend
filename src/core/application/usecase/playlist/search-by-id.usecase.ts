import { Playlist } from "@prisma/client";
import IUseCase from "../usecase.interface";
import { Repository } from "@core/application/repositories/repository.interface";
import { NotFoundException } from "@nestjs/common";

export class SearchPlaylistById implements IUseCase<Playlist> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(id) {
        const playlist = await this._repository.findById(id);
        if (!playlist) {
            throw new NotFoundException('Playlist not found');
        }

        return playlist;
    }
}