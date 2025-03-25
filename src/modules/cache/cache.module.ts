import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { config } from 'dotenv';
import { redisStore } from 'cache-manager-redis-store';
import { TranslateService } from '@core/infra/services/translate/translate.service';

config();

@Module({
    imports: [
        NestCacheModule.registerAsync({
            useFactory: () => ({
                store: redisStore,
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT),
            })
        }),
    ],
    providers: [TranslateService],
    exports: [
        NestCacheModule,
        TranslateService
    ]
})
export class CacheModule {}
