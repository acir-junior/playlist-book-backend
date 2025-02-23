import { CreatePlaylistUseCase } from '@core/application/usecase/playlist/create.usecase';
import { DeletePlaylistUseCase } from '@core/application/usecase/playlist/delete.usecase';
import { SearchAllUseCase } from '@core/application/usecase/playlist/search-all.usecase';
import { SearchPlaylistById } from '@core/application/usecase/playlist/search-by-id.usecase';
import { UpdatePlaylistUseCase } from '@core/application/usecase/playlist/update.usecase';
import { PlaylistRepository } from '@core/infra/repositories/playlist.repository';
import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from 'modules/repositories.module';

@Module({
    imports: [
        RepositoriesModule,
    ]
})

export class PlaylistModule {

    static forRoot(): DynamicModule {
        return {
            exports: [
                'CreatePlaylistUseCase',
                'DeletePlaylistUseCase',
                'SearchByIdPlaylistUseCase',
                'SearchAllPlaylistUseCase',
                'UpdatePlaylistUsecase'
            ],
            module: PlaylistModule,
            providers: [
                {
                    inject: [PlaylistRepository],
                    provide: 'CreatePlaylistUseCase',
                    useFactory: (playlistRepository: PlaylistRepository) => {
                        return new CreatePlaylistUseCase(playlistRepository);
                    }
                },
                {
                    inject: [PlaylistRepository],
                    provide: 'DeletePlaylistUseCase',
                    useFactory: (playlistRepository: PlaylistRepository) => {
                        return new DeletePlaylistUseCase(playlistRepository);
                    }
                },
                {
                    inject: [PlaylistRepository],
                    provide: 'SearchByIdPlaylistUseCase',
                    useFactory: (playlistRepository: PlaylistRepository) => {
                        return new SearchPlaylistById(playlistRepository);
                    }
                },
                {
                    inject: [PlaylistRepository],
                    provide: 'SearchAllPlaylistUseCase',
                    useFactory: (playlistRepository: PlaylistRepository) => {
                        return new SearchAllUseCase(playlistRepository);
                    }
                },
                {
                    inject: [PlaylistRepository],
                    provide: 'UpdatePlaylistUsecase',
                    useFactory: (playlistRepository: PlaylistRepository) => {
                        return new UpdatePlaylistUseCase(playlistRepository);
                    }
                }
            ]
        }
    }
}
