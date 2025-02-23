import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
    imports: [
        BookModule.forRoot(),
        PlaylistModule.forRoot(),
    ],
    controllers: [
        BookController,
        PlaylistController
    ],
})
export class ControllerModule {}
