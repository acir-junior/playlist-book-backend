import { GoogleBookApiService } from '@core/infra/services/google-books/google-books-api.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [GoogleBookApiService],
    exports: [GoogleBookApiService]
})
export class GoogleBooksApiModule {}
