import { RedisAdapter } from "@core/application/adapters/services/redis.adapter";
import { TranslateRepository } from "@core/application/repositories/translate/translate.repository";
import { translate } from "@vitalets/google-translate-api";

export class TranslateService implements TranslateRepository {

    constructor(
        private readonly _redisAdapter: RedisAdapter
    ) {}

    async translate(description: string, target: string): Promise<string> {
        const cacheKey = `translate:${description}:${target}`;
        const cachedTranslation = await this._redisAdapter.get(cacheKey);
        if (cachedTranslation) {
            return cachedTranslation;
        }

        const text = await this._chunkDescription(description, target);
        await this._redisAdapter.set(cacheKey, text, 86400);

        return `${text.substring(0, 1573)}...`;
    }

    private async _chunkDescription(
        description: string,
        target: string,
        chunkSize = 1000
    ): Promise<string> {
        const chunks = description.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];

        let translated = '';
        for (const chunk of chunks) {
            const { text } = await translate(chunk, { to: target });
            translated += text + ' ';
        }

        return translated.trim();
    }
}
