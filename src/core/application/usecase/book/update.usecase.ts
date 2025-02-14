import { Repository } from "@core/application/repositories/repository.interface";
import { Book } from "@core/domain/entities/book.entity";
import IUseCase from "../usecase.interface";

export class UpdateBookUsecase implements IUseCase<any> {

    constructor(
        private readonly _repository: Repository<Book>
    ) {}

    async execute(props: any): Promise<void> {
        const bookFound = await this._repository.findById(props.id);
        
        console.log(`${JSON.stringify(bookFound)} foi encontrado`);
        if (!bookFound) {
            throw new Error("Book not found");
        }
        
        bookFound.updateProps(props);
        console.log(`${JSON.stringify(bookFound)} foi atualizado`);
        await this._repository.update(bookFound);
    }
}