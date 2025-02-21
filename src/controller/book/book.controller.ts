import { CreateBookUseCase } from "@core/application/usecase/book/create.usecase";
import { DeleteBookUseCase } from "@core/application/usecase/book/delete.usecase";
import { SearchAllUseCase } from "@core/application/usecase/book/search-all.usecase";
import { SearchBookByApiUseCase } from "@core/application/usecase/book/search-by-api.usecase";
import { SearchByIdBookUseCase } from "@core/application/usecase/book/search-by-id.usecase";
import { BookMap } from "@core/infra/mappers/book.map";
import { Body, Controller, Delete, Get, Inject, Param, Post } from "@nestjs/common";

@Controller('book')
export class BookController {

    constructor(
        @Inject('CreateBookUseCase')
        private readonly _createBookUseCase: CreateBookUseCase,
        @Inject('DeleteBookUseCase')
        private readonly _deleteBookUseCase: DeleteBookUseCase,
        @Inject('SearchByIdBookUseCase')
        private readonly _searchByIdUseCase: SearchByIdBookUseCase,
        @Inject('SearchAllBookUseCase')
        private readonly _searchAllUseCase: SearchAllUseCase,
        @Inject('SearchBookByApiUseCase')
        private readonly _searchBookByApiUseCase: SearchBookByApiUseCase
    ) {}

    @Post('create')
    async createBook(
        @Body() body: any
    ) {
        return await this._createBookUseCase.execute(body);
    }

    @Delete('delete/:id')
    async deleteBook(
        @Param() id: string
    ) {
        return await this._deleteBookUseCase.execute(id);
    }

    @Get('search/:id')
    async searchBook(
        @Param() id: string
    ) {
        const book = await this._searchByIdUseCase.execute(id);
        return BookMap.toHttp(book);
    }

    @Get('search')
    async searchAllBooks() {
        const books = await this._searchAllUseCase.execute();
        return books.map(book => BookMap.toHttp(book));
    }

    @Get('search-book/:param')
    async searchBookByApi(
        @Param('param') param: string
    ) {
        return await this._searchBookByApiUseCase.execute(param);
    }
}