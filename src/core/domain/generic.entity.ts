import { createId as cuid } from "@paralleldrive/cuid2";

export interface IGeneric {
    createdAt: Date;
    updatedAt?: Date;
}

export type ReplaceProps<T, R> = Omit <T, keyof R> & R;

export type PropsPartial<T> = {
    [P in keyof T]?: T[P] extends object ? PropsPartial<T[P]> : T[P];
}

export type ProxyHandler<T extends IGeneric> = {
    get(target: GenericEntity<T>, prop: string | symbol): any;
}

export abstract class GenericEntity<T extends IGeneric> {
    protected readonly _id: any;
    protected readonly _createdAt: Date;
    protected props: T;
    
    constructor(
        props: ReplaceProps<T, { createdAt?: Date }>,
        id?: any,
    ) {
        this._id = id ?? cuid();
        this.props = this._initProps(props);

        return this._createProxy();
    }

    private _initProps(props: ReplaceProps<T, { createdAt?: Date }>): T {
        return {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? null,
        } as T;
    }

    private _createProxy(): GenericEntity<T> {
        const handler: ProxyHandler<T> = {
            get: (target, prop) => {
                if (prop in target.props) {
                    return target.props[prop as keyof T];
                }
                return (target as any)[prop];
            }
        };
        return new Proxy(this, handler);
    }

    get id(): any {
        return this._id;
    }

    get createdAt(): Date {
        return this.props.createdAt;
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
            ...this.props,
        };
    };
}
