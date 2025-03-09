import { SearchAllUseCase } from "@core/application/usecase/playlist/search-all.usecase";
import { PlaylistRepository } from "./playlist.repository";
import { PlaylistMap } from "../mappers/playlist.map";

describe('Playlist integration', () => {

    test.only('find all playlist', async () => {
        const searchAllPlaylistsUC = new SearchAllUseCase(new PlaylistRepository()); 
        const playlists = await searchAllPlaylistsUC.execute();
        console.log(playlists.map(PlaylistMap.toHttp));
    }, 10000);
});