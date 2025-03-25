import { CreateBookUseCase } from "@core/application/usecase/book/create.usecase";
import { DeleteBookUseCase } from "@core/application/usecase/book/delete.usecase";
import { SearchAllUseCase } from "@core/application/usecase/book/search-all.usecase";
import { SearchBookByApiUseCase } from "@core/application/usecase/book/search-by-api.usecase";
import { SearchByIdBookUseCase } from "@core/application/usecase/book/search-by-id.usecase";
import { TranslateDescriptionUseCase } from "@core/application/usecase/book/translate-description.usecase";
import { UpdateBookUsecase } from "@core/application/usecase/book/update.usecase";
import { FetchHttp } from "@core/infra/http/fetch.http";
import { BookRepository } from "@core/infra/repositories/book.repository";
import { GoogleBookApiService } from "@core/infra/services/google-books/google-books-api.service";
import { TranslateService } from "@core/infra/services/translate/translate.service";
import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { DynamicModule, Module } from "@nestjs/common";
import { CacheModule } from "modules/cache/cache.module";
import { GoogleBooksApiModule } from "modules/google-books-api/google-books-api.module";
import { RepositoriesModule } from "modules/repositories.module";

@Module({
    imports: [
        RepositoriesModule,
        GoogleBooksApiModule,
        FetchHttp,
        CacheModule
    ],
})

export class BookModule {

    static forRoot(): DynamicModule {
        return {
            exports: [
                'CreateBookUseCase',
                'DeleteBookUseCase',
                'SearchByIdBookUseCase',
                'SearchAllBookUseCase',
                'SearchBookByApiUseCase',
                'UpdateBookUsecase',
                'TranslateDescriptionUseCase'
            ],
            imports: [GoogleBookApiService, TranslateService],
            module: BookModule,
            providers: [
                {
                    inject: [BookRepository],
                    provide: 'CreateBookUseCase',
                    useFactory: (bookRepository: BookRepository) => {
                        return new CreateBookUseCase(bookRepository);
                    }
                },
                {
                    inject: [BookRepository],
                    provide: 'DeleteBookUseCase',
                    useFactory: (bookRepository: BookRepository) => {
                        return new DeleteBookUseCase(bookRepository);
                    }
                },
                {
                    inject: [BookRepository],
                    provide: 'SearchByIdBookUseCase',
                    useFactory: (bookRepository: BookRepository) => {
                        return new SearchByIdBookUseCase(bookRepository);
                    }
                },
                {
                    inject: [BookRepository],
                    provide: 'SearchAllBookUseCase',
                    useFactory: (bookRepository: BookRepository) => {
                        return new SearchAllUseCase(bookRepository);
                    }
                },
                {
                    inject: [GoogleBookApiService],
                    provide: 'SearchBookByApiUseCase',
                    useFactory: () => {
                        return new SearchBookByApiUseCase(
                            new GoogleBookApiService(
                                new FetchHttp()
                            )
                        );
                    }
                },
                {
                    inject: [BookRepository],
                    provide: 'UpdateBookUsecase',
                    useFactory: (bookRepository: BookRepository) => {
                        return new UpdateBookUsecase(bookRepository);
                    }
                },
                {
                    inject: [CACHE_MANAGER],
                    provide: 'TranslateDescriptionUseCase',
                    useFactory: (cacheManager: Cache) => {
                        return new TranslateDescriptionUseCase(
                            new TranslateService(cacheManager),
                            new BookRepository()
                        );
                    }
                }
            ],
        }
    }
}