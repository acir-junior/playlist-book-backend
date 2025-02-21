import { GenericEntity, IGeneric } from "../generic.entity";
import { IBook } from "./book.entity";

export interface IPlaylist extends IGeneric {
    title: string;
    description: string;
    author: string;
    books?: IBook[];
}

export class Playlist extends GenericEntity<IPlaylist> {

    get title(): string {
        return this.getProps().title;
    }

    get description(): string {
        return this.getProps().description;
    }

    get author(): string {
        return this.getProps().author;
    }

    static create(command: IPlaylist): Playlist {
        return new Playlist({
            title: command.title,
            description: command.description,
            author: command.author,
            createdAt: new Date(),
        });
    }

}