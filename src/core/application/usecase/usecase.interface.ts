export default interface IUseCase<T> {
    execute(data: T): Promise<any>;
}