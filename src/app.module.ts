import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { DatabaseModule } from './modules/database/database.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [
    PrismaModule,
    DatabaseModule,
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
