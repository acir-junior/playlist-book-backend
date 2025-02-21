import { BookRepository } from '@core/infra/repositories/book.repository';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PlaylistRepository } from '@core/infra/repositories/playlist.repository';

const repositories = [
    BookRepository,
    PlaylistRepository
];

@Module({
    imports: [PrismaModule],
    providers: repositories,
    exports: repositories
})
export class RepositoriesModule {}
