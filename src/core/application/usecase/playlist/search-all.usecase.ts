import { Playlist } from "@prisma/client";
import { Repository } from "@core/application/repositories/repository.interface";
import IUseCase from "../usecase.interface";

export class SearchAllUseCase implements IUseCase<Playlist[]> {

    constructor(
        private readonly _repository: Repository<Playlist>
    ) {}

    async execute(): Promise<Playlist[]> {
        return await this._repository.findAll();
    }
}