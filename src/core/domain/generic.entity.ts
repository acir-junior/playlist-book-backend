import { createId as cuid } from "@paralleldrive/cuid2";

export interface IGeneric {
    updatedAt?: Date;
}

export type ReplaceProps<T , R> = Omit <T, keyof R> & R;

export type PropsPartial<T> = {
    [P in keyof T]?: T[P] extends object ? PropsPartial<T[P]> : T[P];
}

export abstract class GenericEntity<T extends IGeneric> {
    protected readonly _id: any;
    protected readonly _createdAt: Date;
    protected props: T;
    
    constructor(
        props: T,
        id?: any,
        createdAt?: Date
    ) {
        this._id = id ?? cuid();
        this._createdAt = createdAt ?? new Date();
        this.props = this._initProps(props);
    }

    private _initProps(props: ReplaceProps<T, { createdAt?: Date }>): T {
        return {
            ...props,
            updatedAt: props.updatedAt ?? null,
        } as T;
    }

    get id(): any {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date | null {
        return this.props.updatedAt ?? null;
    }

    getProps(): T {
        return this.props;
    }

    updateProps(newProps: PropsPartial<Omit<T, keyof IGeneric>>): this {
        this.props = { ...this.props, ...newProps };
        this.props.updatedAt = new Date();
        return this;
    }

    toJson(): T & { id: any; createdAt: Date } {
        return {
            id: this.id,
            createdAt: this.createdAt,
            ...this.props,
        };
    };
}
