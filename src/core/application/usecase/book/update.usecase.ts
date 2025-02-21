import { Repository } from "@core/application/repositories/repository.interface";
import { Book } from "@core/domain/entities/book.entity";
import IUseCase from "../usecase.interface";
import { NotFoundException } from "@nestjs/common";

export class UpdateBookUsecase implements IUseCase<any> {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(props: any): Promise<void> {
        const { id, ...rest } = props;
        const bookFound = await this._repository.findById(id);
        
        if (!bookFound) {
            throw new NotFoundException("Book not found");
        }
        
        bookFound.updateProps({ ...rest });
        await this._repository.update(bookFound);
    }
}