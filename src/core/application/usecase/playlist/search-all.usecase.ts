import IUseCase from "../usecase.interface";
import { Repository } from "@core/application/repositories/repository.interface";
import { Playlist } from "@core/domain/entities/playlist.entity";

export class SearchAllUseCase implements IUseCase<Playlist[]> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(): Promise<Playlist[]> {
        return await this._repository.findAll();
    }
}