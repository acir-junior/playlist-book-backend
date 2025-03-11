import { CreatePlaylistUseCase } from '@core/application/usecase/playlist/create.usecase';
import { DeletePlaylistUseCase } from '@core/application/usecase/playlist/delete.usecase';
import { SearchAllUseCase } from '@core/application/usecase/playlist/search-all.usecase';
import { SearchPlaylistById } from '@core/application/usecase/playlist/search-by-id.usecase';
import { UpdatePlaylistUseCase } from '@core/application/usecase/playlist/update.usecase';
import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create.dto';
import { PlaylistMap } from '@core/infra/mappers/playlist.map';
import { UpdatePlaylistDto } from './dto/update.dto';
import { Response } from 'express';

@Controller('playlist')
export class PlaylistController {

    constructor(
        @Inject('CreatePlaylistUseCase')
        private readonly _createPlaylistUseCase: CreatePlaylistUseCase,
        @Inject('DeletePlaylistUseCase')
        private readonly _deletePlaylistUseCase: DeletePlaylistUseCase,
        @Inject('SearchAllPlaylistUseCase')
        private readonly _searchAllPlaylistUseCase: SearchAllUseCase,
        @Inject('SearchByIdPlaylistUseCase')
        private readonly _searchByIdPlaylistUseCase: SearchPlaylistById,
        @Inject('UpdatePlaylistUsecase')
        private readonly _updatePlaylistUseCase: UpdatePlaylistUseCase,
    ) {}

    @Post('create')
    async createPlaylist(
        @Body() body: CreatePlaylistDto,
        @Res() res: Response
    ) {
        await this._createPlaylistUseCase.execute(body);
        return res.status(201).json({ message: 'Playlist criada com sucesso!' });
    }

    @Delete('delete/:id')
    async deletePlaylist(
        @Param('id') id: string,
        @Res() res: Response
    ) {
        await this._deletePlaylistUseCase.execute(id);
        return res.status(200).json({ message: 'Playlist deletada com sucesso!' });
    }

    @Get('search/:id')
    async searchPlaylist(
        @Param('id') id: string
    ) {
        const playlist = await this._searchByIdPlaylistUseCase.execute(id);
        return PlaylistMap.toHttp(playlist);
    }

    @Get('search')
    async searchAllPlaylists() {
        const playlists = await this._searchAllPlaylistUseCase.execute();
        return playlists.map(PlaylistMap.toHttp);
    }

    @Put('update/:id')
    async updatePlaylist(
        @Param('id') id: string,
        @Body() body: UpdatePlaylistDto,
        @Res() res: Response
    ) {
        await this._updatePlaylistUseCase.execute({ id, ...body });
        return res.status(200).json({ message: 'Playlist atualizada com sucesso!' });
    }
}
