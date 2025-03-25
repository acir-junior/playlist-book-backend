export interface RedisAdapter {
    get(key: string): Promise<any>;
    set(key: string, value: any, time: number): Promise<void>;
}