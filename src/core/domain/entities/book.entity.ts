import { GenericEntity, IGeneric } from "../generic.entity";
import { IPlaylist } from "./playlist.entity";

export interface IBook extends IGeneric {
    title: string;
    url: string;
    cover: string;
    author?: string;
    description?: string;
    playlistId?: string;
    plalists?: IPlaylist[];
}

export class Book extends GenericEntity<IBook> {

    get title(): string {
        return this.getProps().title;
    }

    get url(): string {
        return this.getProps().url;
    }

    get cover(): string {
        return this.getProps().cover;
    }

    get author(): string {
        return this.getProps().author;
    }

    get description(): string {
        return this.getProps().description;
    }

    get playlistId(): string {
        return this.getProps().playlistId;
    }

    static create(command: IBook): Book {
        return new Book({
            title: command.title,
            url: command.url,
            cover: command.cover,
            author: command.author,
            description: command.description,
            playlistId: command.playlistId,
        });
    }
}
