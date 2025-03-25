import { TranslateService } from "@core/infra/services/translate/translate.service";
import IUseCase from "../usecase.interface";
import { Repository } from "@core/application/repositories/repository.interface";
import { Book } from "@core/domain/entities/book.entity";

export class TranslateDescriptionUseCase implements IUseCase<string> {

    constructor(
        private readonly _translateService: TranslateService,
        private readonly _repository: Repository<Book>
    ) {}

    async execute(props: any): Promise<string> {
        const { id, ...rest } = props;
        const bookFound = await this._repository.findById(id);
        if (!bookFound) {
            throw new Error("Book not found");
        }

        const description = await this._translateService.translate(props.description, 'pt');
        rest.description = description;
        
        bookFound.updateProps({ ...rest });
        await this._repository.update(bookFound);

        return description;
    }
}