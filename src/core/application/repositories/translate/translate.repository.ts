export interface TranslateRepository {
    translate(description: string, target: string): Promise<any>;
}