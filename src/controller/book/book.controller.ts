import { CreateBookUseCase } from "@core/application/usecase/book/create.usecase";
import { DeleteBookUseCase } from "@core/application/usecase/book/delete.usecase";
import { SearchAllUseCase } from "@core/application/usecase/book/search-all.usecase";
import { SearchBookByApiUseCase } from "@core/application/usecase/book/search-by-api.usecase";
import { SearchByIdBookUseCase } from "@core/application/usecase/book/search-by-id.usecase";
import { UpdateBookUsecase } from "@core/application/usecase/book/update.usecase";
import { BookMap } from "@core/infra/mappers/book.map";
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateBookDto } from "./dto/create.dto";
import { BookByApiMap } from "@core/infra/mappers/book-by-api.map";

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
        private readonly _searchBookByApiUseCase: SearchBookByApiUseCase,
        @Inject('UpdateBookUsecase')
        private readonly _updateBookUseCase: UpdateBookUsecase,
    ) {}

    @Post('create')
    async createBook(
        @Body() body: CreateBookDto
    ) {
        return await this._createBookUseCase.execute(body);
    }

    @Delete('delete/:id')
    async deleteBook(
        @Param('id') id: string
    ) {
        return await this._deleteBookUseCase.execute(id);
    }

    @Get('search/:id')
    async searchBook(
        @Param('id') id: string
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
        const bookFound = await this._searchBookByApiUseCase.execute(param);
        return bookFound.map(book => BookByApiMap.toHttp(book));
        
    }

    @Put('update/:id')
    async updateBook(
        @Param('id') id: string,
        @Body() body: any
    ) {
        return await this._updateBookUseCase.execute({ id, ...body });
    }
}